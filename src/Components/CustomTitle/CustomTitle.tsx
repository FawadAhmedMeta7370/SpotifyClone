import {FC} from 'react';
import {styles} from './style';
import {Text, View} from 'react-native';
import {ICustomTitle} from '../../Interface/Interface';

const CustomTitle: FC<ICustomTitle> = ({fs, text, containerstyle, children, cstmstyle}) => {
  return (
    <View style={[styles.root, containerstyle]}>
      <Text style={[styles.titleText, cstmstyle]}>{children}</Text>
      {text && <Text style={[styles.titleText, cstmstyle, fs]} >{text}</Text>}
    </View>
  );
};

export default CustomTitle;
