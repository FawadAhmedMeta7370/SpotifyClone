import {FC} from 'react';
import {styles} from './style';
import {Image, Text, View} from 'react-native';
import {ICard} from '../../Interface/Interface';
import {images} from '../../Assets/Images/Images';

const Card: FC<ICard> = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={images.CardPic} />
      <Text style={styles.textStyle}>Ed Sheeran</Text>
    </View>
  );
};

export default Card;
