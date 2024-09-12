import {FC} from 'react';
import {SectionList, Text, View} from 'react-native';
import {ISearchScreen} from '../../Interface/Interface';
import CustomTitle from '../../Components/CustomTitle/CustomTitle';
import SearchBar from '../../Components/SearchBar/SearchBar';
import {styles} from './style';
import SearchCard from '../../Components/SearchCard/SearchCard';

const DATA = [
  {
    title: 'Your Top Genres',
    data: [
      'Pop',
      'Rock',
      // 'Hip-Hop',
      // 'Jazz',
      // 'Classical',
      // 'Electronic',
      // 'Country',
      // 'Reggae',
    ],
  },
  {
    title: 'Browse All',
    data: [
      'Charts',
      'Podcasts',
      'Concerts',
      'New Releases',
      'Top 10',
      'Made for You',
      'Live Events',
      'Discover',
      'Workout',
      'Mood',
      'Chill',
    ],
  },
];

const SearchScreen: FC<ISearchScreen> = () => {
  return (
    <>
      <View style={styles.container}>
        <CustomTitle cstmstyle={{fontSize: 40}}>Search</CustomTitle>
        <SearchBar />
        <View style={{margin: '0%'}}>
          <SectionList
            sections={DATA}
            renderItem={({item}) => <SearchCard text={item} />}
            renderSectionHeader={({section: {title}}) => (
              <View style={{minWidth: '100%'}}>
                <CustomTitle children={title} />
              </View>
            )}
            keyExtractor={(item, index) => item + index.toString()}
            style={{marginTop: 20}}
            contentContainerStyle={styles.contentContainer}
          />
        </View>
      </View>
    </>
  );
};

export default SearchScreen;
