import {styles} from './style';
import Share from 'react-native-share';
import List from '../../Components/List/List';
import {images} from '../../Assets/Images/Images';
import {GetAlbumSongs} from '../../API/AcessToken';
import {IPlaylistScreen} from '../../Interface/Interface';
import {Image, ScrollView, Text, View} from 'react-native';
import {FC, useEffect, useLayoutEffect, useState} from 'react';
import IconButton from '../../Components/IconButton/IconButton';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

interface Song {
  id: any;
  duration_ms: number;
  preview_url: string | null;
}
interface Tracks {
  items: Song[];
}
interface Songs {
  tracks: Tracks;
  artists: {name: string}[];
}

const PlaylistScreen: FC<IPlaylistScreen> = ({route, navigation}) => {
  const [songs, setsongs] = useState<Songs | null>(null);

  const [artistName, setArtistName] = useState<string>('');

  const {albumid} = route.params;

  useLayoutEffect(() => {
    async function fetchsongs() {
      try {
        const response = await GetAlbumSongs(albumid);

        // Filter out songs that don't have a preview_url
        const filteredSongs = response?.data.tracks.items.filter(
          (item: {preview_url: any}) => item.preview_url,
        );

        // Set the filtered songs to state
        setsongs({
          ...response?.data,
          tracks: {
            ...response?.data.tracks,
            items: filteredSongs, // only songs with a preview_url
          },
        });

        const artist = await response?.data.artists[0]?.name;
        setArtistName(artist);
      } catch (error) {
        console.log("Error fetching songs using ID's");
      }
    }
    fetchsongs();
  }, [albumid]);

  function backButtonHandler() {
    navigation.goBack();
  }

  function MusicPlayerHandler(id: any) {
    const currentSongIndex = songs?.tracks.items.findIndex(
      song => song.id === id,
    );

    navigation.navigate('MusicPlay Screen', {
      songId: id,
      songsList: songs?.tracks.items, // Pass the list of songs
      // currentSongIndex: currentSongIndex, // Pass the current song index
    });
  }

  const [formattedTime, setFormattedTime] = useState('');

  useLayoutEffect(() => {
    if (!songs || songs.tracks.items.length === 0) return;

    const totalDurationMs = songs?.tracks.items.reduce(
      (acc: any, song: {duration_ms: any}) => acc + song.duration_ms,
      0,
    );

    const hours = Math.floor(totalDurationMs / 3600000); // 1 hour = 3600000 ms
    const minutes = Math.floor((totalDurationMs % 3600000) / 60000); // 1 minute = 60000 ms
    const seconds = Math.floor((totalDurationMs % 60000) / 1000); // 1 second = 1000 ms

    const formatted = `${hours}h ${minutes}m ${seconds}s`;

    setFormattedTime(formatted);
  }, [songs]);

  function share() {
    const options = {
      title: 'Sharing Song',
      message: 'Check out this song',
      // url: songs?.data.preview_url,
    };
    Share.open(options)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  }

  const Y = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(event => {
    Y.value = event.contentOffset.y;
  });

  const animatedViewStyle = useAnimatedStyle(() => {
    const translateY = interpolate(Y.value, [0, 200], [35, 160], 'clamp');
    return {
      translateY,
    };
  });

  const animatedImageStyle = useAnimatedStyle(() => {
    const scale = interpolate(Y.value * 0.5, [0, 100], [1, 0.4], 'clamp');
    const opacity = interpolate(Y.value, [100, 225], [1, 0], 'clamp');
    // const translateY = interpolate(Y.value * 0.09, [0, 50], [1, 0.3], 'clamp');

    return {
      transform: [{scale}],
      opacity,
    };
  });

  const animatedHeaderStyle = useAnimatedStyle(() => {
    const opacity = interpolate(Y.value, [150, 200], [0, 1], 'clamp');
    return {
      opacity,
    };
  });

  const animatedBackgroundStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      Y.value,
      [150, 200], 
      ['transparent', '#2b2929f7'],
    );
    return {backgroundColor};
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => {
        return (
          <Animated.View
            style={[
              {
                paddingVertical: '2%',
                flexDirection: 'row',
                alignItems: 'center',
              },
              animatedBackgroundStyle,
            ]}>
            <View style={{margin: '2%'}}>
              <IconButton
                onPress={backButtonHandler}
                name="chevron-back-outline"
                color="white"
                cstmstyle={{marginHorizontal: 0}}
              />
            </View>
            <Animated.View style={[styles.HeaderStyle, animatedHeaderStyle]}>
              <Animated.Text
                style={{color: 'white', fontSize: 25, marginLeft: '10%'}}>
                {songs?.name}
              </Animated.Text>
            </Animated.View>
          </Animated.View>
        );
      },
    });
  }, [Y.value, navigation, songs]);

  function headerComponent() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            {alignItems: 'center', height: '145%', marginBottom: '7%'},
            animatedViewStyle,
          ]}>
          <Animated.Image
            style={[styles.image, animatedImageStyle]}
            source={images.CardPic}
          />
        </Animated.View>

        {artistName && (
          <Text style={styles.textStyle}>
            Tune in to Top Tracks from {artistName}
          </Text>
        )}
        <View style={{flexDirection: 'row'}}>
          <Image style={styles.logoStyle} source={images.SpotifyGreenLogo} />
          <Text style={styles.spotifyText}>Spotify</Text>
        </View>
        <View>
          <Text style={styles.textStyle}>Duratoin. {formattedTime} </Text>
          {/* <Text style={styles.textStyle}>Tracks. {} </Text> */}
        </View>
        <View style={styles.logoscontainer}>
          <View style={{flexDirection: 'row'}}>
            <IconButton
              cstmstyle={{marginHorizontal: 10}}
              name="heart-outline"
              color={'white'}
            />
            <IconButton name="ellipsis-vertical-outline" color={'white'} />
          </View>
          <Image style={styles.playLogoStyle} source={images.PlayGreenLogo} />
        </View>
      </View>
    );
  }

  const tabBarHeight = useBottomTabBarHeight();

  return (
    <Animated.ScrollView
      onScroll={scrollHandler}
      scrollEventThrottle={16}
      // disableScrollViewPanResponder
      decelerationRate="fast"
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: '#000000ea',
        paddingBottom: tabBarHeight,
      }}>
      <List
        data={songs?.tracks?.items}
        onPress={(id: any) => MusicPlayerHandler(id)}
        share={share}
        ListHeaderComponent={headerComponent}
      />
    </Animated.ScrollView>
  );
};

export default PlaylistScreen;
