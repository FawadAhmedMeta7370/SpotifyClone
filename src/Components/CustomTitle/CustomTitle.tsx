import {FC} from 'react';
import {styles} from './style';
import {Text, View} from 'react-native';
import {ICustomTitle} from '../../Interface/Interface';

const CustomTitle: FC<ICustomTitle> = ({children}) => {
  return (
    <View style={styles.root}>
      <Text style={styles.titleText}>{children}</Text>
    </View>
  );
};

export default CustomTitle;
