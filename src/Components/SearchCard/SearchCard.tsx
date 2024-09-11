import {FC} from 'react';
import {Text, View} from 'react-native';

import {ISearchCard} from '../../Interface/Interface';
import {styles} from './style';

const SearchCard: FC<ISearchCard> = ({children}) => {
  return (
    <View style={styles.boxContainer}>
      <Text style={styles.textStyle}>{children}</Text>
    </View>
  );
};

export default SearchCard;
