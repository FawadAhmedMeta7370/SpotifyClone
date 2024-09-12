import {FC, useEffect} from 'react';
import {Image, Pressable, View} from 'react-native';
import {ILogoButton} from '../../Interface/Interface';
import {styles} from './style';
import IconButton from '../IconButton/IconButton';

const LogoButton: FC<ILogoButton> = ({containerstyle, cstmstyle, source, onPress}) => {
  return (
    <View style={containerstyle}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => pressed && styles.pressed}>
        <Image style={cstmstyle} source={source} />
      </Pressable>
    </View>
  );
};
export default LogoButton;
