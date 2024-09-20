import {FC} from 'react';
import {IList} from '../../Interface/Interface';
import {FlatList} from 'react-native';
import ListCard from '../ListCard/ListCard';

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

const List: FC<IList> = ({share, data, onPress}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => {
        return <ListCard share={share} item={item} onPress={onPress} />;
      }}
      keyExtractor={item => item.id}
    />
  );
};

export default List;
