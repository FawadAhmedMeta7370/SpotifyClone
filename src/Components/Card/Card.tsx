import {FC} from 'react';
import {styles} from './style';
import {ICard} from '../../Interface/Interface';
import {
  FlatList,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {images} from '../../Assets/Images/Images';

const Card: FC<ICard> = ({type, item, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <View style={[styles.container]}>

        <Image style={styles.imageStyle} source={images.CardPic} />
        
        <Text style={styles.textStyle}>{type == 'artist' ? "Album." : "Song."} {item.name}</Text>
        <Text style={styles.textStyle}>
          Artist. {item.artists.map((artists: any) => artists.name)}
        </Text>

      </View>
    </TouchableOpacity>
  );
};

export default Card;
