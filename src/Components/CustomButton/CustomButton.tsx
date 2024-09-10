import {FC} from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {ICustomButton} from '../../Constants/Interface';
import {styles} from './style';

const CustomButton: FC<ICustomButton> = ({
  children,
  BTstyle,
  BBGstyle,
  image,
  Istyle,
}) => {
  return (
    <Pressable
      style={({pressed}) => [
        styles.button,
        BBGstyle,
        pressed && styles.pressed,
      ]}>
      <View style={styles.ImgTxtContainer}>
        {image ? <Image style={Istyle} source={image} /> : null}
        <Text style={[styles.textStyle, BTstyle]}>{children}</Text>
      </View>
    </Pressable>
  );
};

export default CustomButton;
