import {styles} from './style';
import {FC, useEffect} from 'react';
import {Image, Text, View} from 'react-native';
import {images} from '../../Assets/Images/Images';
import ListCard from '../../Components/ListCard/ListCard';
import {IPlaylistScreen} from '../../Interface/Interface';
import IconButton from '../../Components/IconButton/IconButton';

const PlaylistScreen: FC<IPlaylistScreen> = ({navigation}) => {
  function backButtonHandler() {
    navigation.goBack();
  }

  function MusicPlayerHandler() {
    navigation.navigate('MusicPlay Screen');
  }

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return (
          <IconButton
            onPress={backButtonHandler}
            name="chevron-back-outline"
            color="white"
            cstmstyle={{marginHorizontal: 0}}
          />
        );
      },
    });
  }, []);

  return (
      <View style={styles.container}>
        {/* <View style={styles.imagecontainer}> */}
        <Image style={styles.image} source={images.CardPic} />
        {/* </View> */}
        <Text style={styles.textStyle}>
          Tune in to Top Tracks from Imagine Dragons, Alan walker and many more
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Image style={styles.logoStyle} source={images.SpotifyGreenLogo} />
          <Text style={styles.spotifyText}>Spotify</Text>
        </View>
        <View>
          <Text style={styles.textStyle}>191,165 Likes . 3h 45min</Text>
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
        {/* <View style={{paddingBottom: 10}}> */}
          <ListCard onPress={MusicPlayerHandler} />
        {/* </View> */}
      </View>
  );
};

export default PlaylistScreen;
