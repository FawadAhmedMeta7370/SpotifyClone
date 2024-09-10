import {FC} from 'react';
import {styles} from './style';
import {Image, Pressable, Text, TouchableOpacity, View} from 'react-native';
import {ILogin} from '../../../Constants/Interface';
import {images} from '../../../Assets/Images/Images';
import CustomTextInput from '../../../Components/CustomTextInput/CustomTextInput';
import CustomButton from '../../../Components/CustomButton/CustomButton';

const Login: FC<ILogin> = ({navigation}) => {
  function SignupNavigationHandler() {
    navigation.navigate('Signup Screen');
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
        <CustomTextInput children={'Email Address or Username'} />
        <CustomTextInput children={'Password'} />
        <View style={{marginVertical: '5%'}}>
          <CustomButton BTstyle={{fontSize: 20}}> Login </CustomButton>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={{color: 'white', fontSize: 20}}>
            Don't have an account?  {/* <TouchableOpacity
              ref={touchableRef}
              style={({pressed}) => [pressed && styles.pressed]}> */}
              <Text
                style={{
                  color: '#00a6ff',
                  fontSize: 20,
                  textDecorationLine: 'underline',
                }}
                onPress={SignupNavigationHandler}>
                Signup
              </Text> {/* </TouchableOpacity> */} for free
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Login;
