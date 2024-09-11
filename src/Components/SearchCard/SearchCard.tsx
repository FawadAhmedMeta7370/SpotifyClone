import {FC} from 'react';
import {styles} from './style';
import {Text, View} from 'react-native';
import {ISearchCard} from '../../Interface/Interface';

const SearchCard: FC<ISearchCard> = ({text}) => {
  return (
    <View style={styles.boxContainer}>
      <Text style={styles.textStyle}>{text}</Text>
    </View>
  );
};

export default SearchCard;
