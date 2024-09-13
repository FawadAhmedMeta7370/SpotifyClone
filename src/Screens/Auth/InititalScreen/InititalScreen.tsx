import {FC, useEffect} from 'react';
import {styles} from './style';
import {Image, Text, View} from 'react-native';
import {ILogin} from '../../../Interface/Interface';
import {images} from '../../../Assets/Images/Images';
import CustomButton from '../../../Components/CustomButton/CustomButton';

const InititalScreen: FC<ILogin> = ({navigation}) => {

  function LoginNavigationHandler() {
    navigation.navigate('Login Screen');
  }
  function SignupNavigationHandler() {
    navigation.navigate('Signup Screen');
  }
  return (
    <View style={styles.contianer}>
      <View style={styles.imagecontainer}>
        <Image style={styles.image} source={images.SpotifyLogoBaW} />
      </View>
      <View style={styles.textcontainer}>
        <Text style={styles.text}>Millions of songs Free on Spotify.</Text>
      </View>

      <CustomButton onPress={SignupNavigationHandler}>
        Signup for free
      </CustomButton>

      <CustomButton
        BTstyle={styles.BTstyle}
        BBGstyle={styles.BBGstyle}
        Istyle={styles.Phonestyle}
        image={images.IphoneIcon}>
        Continue with phone number
      </CustomButton>
      <CustomButton
        BTstyle={styles.BTstyle}
        BBGstyle={styles.BBGstyle}
        Istyle={styles.Googlestyle}
        image={images.GoogleIcon}>
        Continue with Google
      </CustomButton>
      <CustomButton
        BTstyle={styles.BTstyle}
        BBGstyle={styles.BBGstyle}
        Istyle={styles.Facebookstyle}
        image={images.FacebookIcon}>
        Continue with facebook
      </CustomButton>
      <CustomButton
        BTstyle={styles.BTstyle}
        BBGstyle={{backgroundColor: 'black'}}
        onPress={LoginNavigationHandler}>
        Login
      </CustomButton>
    </View>
  );
};

export default InititalScreen;
