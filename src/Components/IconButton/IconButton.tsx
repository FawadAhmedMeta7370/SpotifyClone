import {FC} from 'react';
import {Pressable, TouchableOpacity, View} from 'react-native';
import {IIconButton} from '../../Interface/Interface';
import Ionicons from 'react-native-vector-icons/Ionicons';

const IconButton: FC<IIconButton> = ({cstmstyle, name, color, cstmsize, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress} style={[{marginHorizontal: 20}, cstmstyle]}>
      <Ionicons name={name} color={color} size={cstmsize ? cstmsize : 30} />
    </TouchableOpacity>
  );
};

export default IconButton;
