import {FC} from 'react';
import {styles} from './style';
import {Image, Text, View} from 'react-native';
import {images} from '../../../Assets/Images/Images';
import {ISignupScreen} from '../../../Constants/Interface';
import CustomButton from '../../../Components/CustomButton/CustomButton';
import CustomTextInput from '../../../Components/CustomTextInput/CustomTextInput';

const SignupScreen: FC<ISignupScreen> = ({navigation}) => {
  function loginNavigationHandler() {
    navigation.navigate('Login Screen');
  }

  return (
    <View style={styles.contianer}>
      <View style={styles.imagecontainer}>
        <Image style={styles.image} source={images.SpotifyLogoBaW} />
      </View>
      <View style={styles.textcontainer}>
        <Text style={styles.text}>Enjoy Listening To Music.</Text>
      </View>
      <View>
          <CustomTextInput cstmstyle={{height: '12%'}} children={'Email Address or Username'} />
          <CustomTextInput cstmstyle={{height: '12%'}} children={'Password'} />
          <CustomTextInput cstmstyle={{height: '12%'}} children={'Re-enter Password'} />
        <View style={{marginVertical: '5%'}}>
          <CustomButton BTstyle={{fontSize: 20}}> Signup </CustomButton>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={{color: 'white', fontSize: 20}}>
            Already have an account? {/* <TouchableOpacity
              ref={touchableRef}
              style={({pressed}) => [pressed && styles.pressed]}> */} <Text
              style={{
                color: '#00a6ff',
                fontSize: 20,
                textDecorationLine: 'underline',
              }}
              onPress={loginNavigationHandler}>
              Login
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignupScreen;
