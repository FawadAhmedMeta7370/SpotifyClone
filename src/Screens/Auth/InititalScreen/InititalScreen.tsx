import {FC} from 'react';
import {Image, Text, View} from 'react-native';
import {ILogin} from '../../../Constants/Interface';
import {images} from '../../../Assets/Images/Images';
import {styles} from './style';
import CustomButton from '../../../Components/CustomButton/CustomButton';

const InititalScreen: FC<ILogin> = () => {
  return (
    <View style={styles.contianer}>
      <View style={styles.imagecontainer}>
        <Image style={styles.image} source={images.SpotifyLogoBaW} />
      </View>
      <View style={styles.textcontainer}>
        <Text style={styles.text}>Millions of songs Free on Spotify.</Text>
      </View>

      <CustomButton>Signup for free</CustomButton>

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
        BBGstyle={{backgroundColor: 'black'}}>
        Login
      </CustomButton>
    </View>
  );
};

export default InititalScreen;
