import {styles} from './style';
import {FC, useEffect, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {images} from '../../Assets/Images/Images';
import Slider from '@react-native-community/slider';
import LinearGradient from 'react-native-linear-gradient';
import LogoButton from '../../Components/Logo/LogoButton';
import {IMusicPlayerScreen} from '../../Interface/Interface';
import CustomTitle from '../../Components/CustomTitle/CustomTitle';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MusicPlayerScreen: FC<IMusicPlayerScreen> = ({navigation}) => {
  const [Pause, setPause] = useState<boolean>(true);

  function PauseHandler() {
    if (Pause === false) {
      setPause(true);
    } else if (Pause === true) {
      setPause(false);
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
            {marginRight: '5%', justifyContent: 'space-between'},
          ]}>
          <CustomTitle> Justin Beiber </CustomTitle>
          <LogoButton source={images.HeartLogo} />
        </View>
        <View style={{marginHorizontal: '10%', marginVertical: '5%'}}>
          <Slider
            style={{width: 350, height: 40, alignSelf: 'center'}}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#FFFFFF"
            thumbTintColor="white"
            maximumTrackTintColor="#000000ff"
          />
        </View>
        <View style={styles.songlogos}>
          <LogoButton source={images.ShuffleLogo} />
          <LogoButton source={images.PreviousSongLogo} />
          <MaterialCommunityIcons
            onPress={PauseHandler}
            color={'white'}
            size={100}
            name={Pause ? 'pause-circle' : 'play-circle'}
          />
          <LogoButton source={images.NextSongLogo} />
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
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default MusicPlayerScreen;
