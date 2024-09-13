import {FC} from 'react';
import {styles} from './style';
import {Pressable, Text, View} from 'react-native';
import {ISearchCard} from '../../Interface/Interface';

const SearchCard: FC<ISearchCard> = ({onPress, text}) => {
  return (
    <Pressable onPress={onPress} style={({pressed})=>pressed && {opacity:0.5}}>
      <View style={styles.boxContainer}>
        <Text style={styles.textStyle}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default SearchCard;
