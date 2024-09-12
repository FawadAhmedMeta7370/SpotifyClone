import {FC} from 'react';
import {styles} from './style';
import {images} from '../../Assets/Images/Images';
import IconButton from '../IconButton/IconButton';
import {IListCard} from '../../Interface/Interface';
import {FlatList, Image, Pressable, Text, View} from 'react-native';

export const DATA = [
  {
    id: '1',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    duration: '3:20',
  },
  {
    id: '2',
    title: 'Levitating',
    artist: 'Dua Lipa',
    album: 'Future Nostalgia',
    duration: '3:23',
  },
  {
    id: '3',
    title: 'Watermelon Sugar',
    artist: 'Harry Styles',
    album: 'Fine Line',
    duration: '2:54',
  },
  {
    id: '4',
    title: 'Save Your Tears',
    artist: 'The Weeknd',
    album: 'After Hours',
    duration: '3:35',
  },
  {
    id: '5',
    title: 'Peaches',
    artist: 'Justin Bieber',
    album: 'Justice',
    duration: '3:18',
  },
  {
    id: '6',
    title: 'Drivers License',
    artist: 'Olivia Rodrigo',
    album: 'SOUR',
    duration: '4:02',
  },
  {
    id: '7',
    title: 'Good 4 U',
    artist: 'Olivia Rodrigo',
    album: 'SOUR',
    duration: '2:58',
  },
  {
    id: '8',
    title: 'Kiss Me More',
    artist: 'Doja Cat feat. SZA',
    album: 'Planet Her',
    duration: '3:29',
  },
  {
    id: '9',
    title: 'Bad Habits',
    artist: 'Ed Sheeran',
    album: '= (Equals)',
    duration: '3:50',
  },
  {
    id: '10',
    title: 'MONTERO (Call Me By Your Name)',
    artist: 'Lil Nas X',
    album: 'MONTERO',
    duration: '2:17',
  },
];

const ListCard: FC<IListCard> = ({onPress}) => {
  return (
    <FlatList
      data={DATA}
      renderItem={({item}) => {
        return (
          <Pressable onPress={onPress} style={({pressed})=>pressed && {opacity:0.5}}>
            <View style={styles.rootContainer}>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Image style={styles.imageStyle} source={images.JB} />
                </View>
                <View style={{margin: '2%'}}>
                  <Text style={styles.titleTextStyle}>{item.title}</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={styles.lyricsText}>LYRICS</Text>
                    <Text style={styles.textStyle}>{item.artist}</Text>
                  </View>
                </View>
              </View>
              <View>
                <IconButton name="ellipsis-vertical-outline" color="white" />
              </View>
            </View>
          </Pressable>
        );
      }}
      keyExtractor={item => item.id}
    />
  );
};

export default ListCard;
