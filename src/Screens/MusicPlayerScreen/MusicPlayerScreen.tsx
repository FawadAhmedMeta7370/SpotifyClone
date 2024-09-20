import {styles} from './style';
import {Alert} from 'react-native';
import Share from 'react-native-share';
import Sound from 'react-native-sound';
import {GetSong} from '../../API/AcessToken';
import {Image, Text, View} from 'react-native';
import {images} from '../../Assets/Images/Images';
import Slider from '@react-native-community/slider';
import {FC, useEffect, useRef, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import LogoButton from '../../Components/Logo/LogoButton';
import {IMusicPlayerScreen} from '../../Interface/Interface';
import CustomTitle from '../../Components/CustomTitle/CustomTitle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MusicPlayerScreen: FC<IMusicPlayerScreen> = ({route, navigation}) => {
  const [sound, setSound] = useState<Sound | null>(null);
  const [duration, setDuration] = useState<number>(0);
  const [position, setPosition] = useState<number>(0);
  const [btnState, setbtn] = useState<boolean | undefined>(false);

  const {songId, songsList} = route.params; // Accept song list and current song index
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current song index
  const [song, setSong] = useState<any>();

  async function getSongDetails(trackId: string | undefined) {
    try {
      const songdetails = await GetSong(trackId);
      // console.log('songdetails ========> :', songdetails);
      if (songdetails) {
        setSong(songdetails);
        const PreviewUrl = songdetails.data.preview_url;
        if (PreviewUrl) {
          track = new Sound(PreviewUrl, Sound.MAIN_BUNDLE, error => {
            if (error) {
              Alert.alert('Error');
            }

            setSound(track);

            if (track) {
              setDuration(track.getDuration());
            }

            console.log('duration in seconds: ' + track?.getDuration());

            track?.play(success => {
              if (success) {
                console.log('successfully finished playing');
              } else {
                console.log('playback failed due to audio decoding errors');
              }
            });
          });
        }

        track?.release();
      }
    } catch (error) {
      console.log('Error fetching song details :', error);
    }
  }

  // Handle invalid or missing songs array
  const handleNextTrack = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < songsList.length) {
      setCurrentIndex(nextIndex);
      getSongDetails(songsList[nextIndex].id);
      // setPause(false);
    } else {
      console.log('Reached end of playlist');
    }
  };

  const handlePreviousTrack = () => {
    const nextIndex = currentIndex - 1;
    if (nextIndex >= 0) {
      setCurrentIndex(nextIndex);
      getSongDetails(songsList[nextIndex].id);
    } else {
      console.log('Reached end of playlist');
    }
  };

  const handleShuffleTrack = () => {
    const randomIndex = Math.floor(Math.random() * songsList.length); 
    setCurrentIndex(randomIndex);
    getSongDetails(songsList[randomIndex].id); 
  }

  const intervalRef = useRef<NodeJS.Timeout | null>(null); // Ref to store the interval

  var track: Sound | null = null;

  useEffect(() => {
    getSongDetails(songId);
    return () => {
      sound?.reset();
    };
  }, [songId]);

  function PauseHandler() {
    console.log(sound?.isPlaying());
    setbtn(sound?.isPlaying());
    if (sound?.isPlaying()) {
      sound?.pause();
      // setPause(true);
    } else if (!sound?.isPlaying()) {
      sound?.play();
      // setPause(false);
    }
  }

  function backButtonHandler() {
    navigation.goBack();
  }

  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: {display: 'none'},
    });
    return () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          backgroundColor: 'transparent',
          position: 'absolute',
          borderTopWidth: 0,
          left: 0,
          right: 0,
          bottom: 0,
          elevation: 0,
        },
      });
    };
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => {
        return (
          <View style={styles.headercentercontentcontainer}>
            <Text style={styles.headercentercontent}>Music Player</Text>
          </View>
        );
      },
      headerTitleAlign: 'center',
      headerBackVisible: false,
      headerRight: () => {
        return (
          <LogoButton
            containerstyle={{marginRight: '10%'}}
            onPress={backButtonHandler}
            source={images.Properties}
          />
        );
      },
      headerLeft: () => {
        return (
          <LogoButton
            containerstyle={{marginLeft: '10%'}}
            onPress={backButtonHandler}
            source={images.DownwardsArrowLogo}
          />
        );
      },
    });
  });

  // Format time to mm:ss
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Handle slider change (if you want to implement seeking)
  const onSliderValueChange = (value: number) => {
    if (sound) {
      const newPosition = value * duration;
      sound.setCurrentTime(newPosition);
      setPosition(newPosition);
    }
  };

  // console.log("Tracks Data from the API :",JSON.stringify(song,null,2));
  const renderBtn = () => {
    return (
      <>
        {!btnState ? (
          <MaterialCommunityIcons
            onPress={PauseHandler}
            color={'white'}
            size={100}
            name={'pause-circle'}
          />
        ) : (
          <MaterialCommunityIcons
            onPress={PauseHandler}
            color={'white'}
            size={100}
            name={'play-circle'}
          />
        )}
      </>
    );
  };

  useEffect(() => {
    if (sound) {
      // Create an interval to update position every second
      intervalRef.current = setInterval(() => {
        sound.getCurrentTime(seconds => {
          setPosition(seconds); // Update position in state
        });
      }, 1000); // Every 1 second

      return () => {
        // Cleanup the interval when component unmounts or sound changes
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
  }, [sound]);

  function share() {
    const options = {
      title: 'Sharing Song',
      message: 'Check out this song',
      url: song?.data.preview_url,
    };
    Share.open(options)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#494848', '#272626', '#161515']}
        style={{flex: 1}}>
        {/* <View style={styles.imagecontainer}> */}
        <Image style={styles.image} source={images.SongCoverPic} />
        {/* </View> */}
        <View
          style={[
            styles.songlogos,
            {
              marginRight: '5%',
              justifyContent: 'space-between',
              marginHorizontal: '4%',
            },
          ]}>
          {song && song.data && (
            <CustomTitle text={song.data.artists[0].name} fs={{fontSize: 15}}>
              {song.data.name}
            </CustomTitle>
          )}
          <LogoButton source={images.HeartLogo} />
        </View>
        <View style={{marginHorizontal: '10%', marginVertical: '5%'}}>
          <Slider
            style={{width: 350, height: 40, alignSelf: 'center'}}
            minimumValue={0}
            maximumValue={1}
            value={position / duration || 0}
            onSlidingComplete={onSliderValueChange}
            minimumTrackTintColor="#FFFFFF"
            thumbTintColor="white"
            maximumTrackTintColor="#000000ff"
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: 'white'}}>{formatTime(position)}</Text>
            <Text style={{color: 'white'}}>{formatTime(duration)}</Text>
          </View>
        </View>
        <View style={styles.songlogos}>
          <LogoButton onPress={handleShuffleTrack} source={images.ShuffleLogo} />
          <LogoButton onPress={handlePreviousTrack} source={images.PreviousSongLogo} />
          {renderBtn()}
          <LogoButton onPress={handleNextTrack} source={images.NextSongLogo} />
          <LogoButton source={images.LoopLogo} />
        </View>
        <View
          style={{
            marginTop: '5%',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginHorizontal: '10%',
          }}>
          <LogoButton source={images.CastLogo} />
          <LogoButton
            cstmstyle={{height: 23, width: 23}}
            source={images.ShareLogo}
            onPress={share}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default MusicPlayerScreen;
