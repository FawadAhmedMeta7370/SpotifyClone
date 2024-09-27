import {FC} from 'react';
import {styles} from './style';
import IconButton from '../IconButton/IconButton';
import {images} from '../../Assets/Images/Images';
import {IListCard} from '../../Interface/Interface';
import {Image, Pressable, Text, View} from 'react-native';

const ListCard: FC<IListCard> = ({share, item, onPress}) => {
  return (
    <Pressable
      onPress={() => onPress(item.id)}
      style={({pressed}) => pressed && {opacity: 0.5}}>
      <View style={styles.rootContainer}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Image style={styles.imageStyle} source={images.JB} />
          </View>
          <View style={{margin: '2%'}}>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.titleTextStyle}>
              {item.name}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.lyricsText}>LYRICS</Text>
              <Text style={styles.textStyle}>{item.artists[0].name}</Text>
            </View>
          </View>
        </View>
        <View>
          <IconButton
            onPress={share}
            name="ellipsis-vertical-outline"
            color="white"
          />
        </View>
      </View>
    </Pressable>
  );
};

export default ListCard;
