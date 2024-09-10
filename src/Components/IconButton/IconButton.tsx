import {FC} from 'react';
import {Pressable, View} from 'react-native';
import {IIconButton} from '../../Interface/Interface';
import Ionicons from 'react-native-vector-icons/Ionicons';

const IconButton: FC<IIconButton> = ({name, color, onPress}) => {
  return (
    <Pressable onPress={onPress} style={{marginHorizontal: 20}}>
      <Ionicons name={name} color={color} size={30} />
    </Pressable>
  );
};

export default IconButton;
