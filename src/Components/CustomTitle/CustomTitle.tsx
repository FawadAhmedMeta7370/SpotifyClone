import {FC} from 'react';
import {styles} from './style';
import {Text, View} from 'react-native';
import {ICustomTitle} from '../../Interface/Interface';

const CustomTitle: FC<ICustomTitle> = ({containerstyle, children, cstmstyle}) => {
  return (
    <View style={[styles.root, containerstyle]}>
      <Text style={[styles.titleText, cstmstyle]}>{children}</Text>
    </View>
  );
};

export default CustomTitle;
