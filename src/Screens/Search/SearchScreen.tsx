import {styles} from './style';
import {FC, useEffect, useState} from 'react';
import {SectionList, Text, View} from 'react-native';
import {ISearchScreen} from '../../Interface/Interface';
import SearchBar from '../../Components/SearchBar/SearchBar';
import SearchCard from '../../Components/SearchCard/SearchCard';
import CustomTitle from '../../Components/CustomTitle/CustomTitle';
import {fetchSpotifyToken,GetCategories,GetGenres} from '../../API/AcessToken';

const SearchScreen: FC<ISearchScreen> = ({navigation}) => {
  const [BrowseCategories, setBrowseCategories] = useState([]);
  const [TopGenres, setTopGenres] = useState([]);

  const DATA = [
    {
      title: 'Your Top Genres',
      data: TopGenres,
    },
    {
      title: 'Browse All',
      data: BrowseCategories,
    },
  ];

  useEffect(() => {
    async function fetchtoken() {
      const Token = await fetchSpotifyToken();
      if (Token) {
        const categories = await GetCategories();
        // console.log('categories in search screen:', JSON.stringify(categories, null, 2));
        if (categories) {
          const categoryNames = categories.data.categories.items.map(
            (category: {name: any}) => category.name,
          );
          // console.log('Category Names ========>', categoryNames);
          setBrowseCategories(categoryNames);
        }

        const Genres = await GetGenres();
        // const categoryNames = categories.data.categories.items.map(
        //   category => category.name,
        // );
        // console.log('Genres ===>', JSON.stringify(Genres, null, 2));
        setTopGenres(Genres?.data.genres);
      }
    }
    fetchtoken();
  }, []);

  const COLORS = [
    '#FFA07A',
    '#20B2AA',
    '#FF6347',
    '#4682B4',
    '#2e8f4e',
    '#6f1ed8',
    '#f85c1e',
    '#14706c',
    '#ff8872',
    '#005eaa',
    '#336845',
    '#b57cff',
  ];

  return (
    <>
      <View style={styles.container}>
        <CustomTitle cstmstyle={{fontSize: 40}}>Search</CustomTitle>
        <SearchBar />
        <View style={{margin: '0%'}}>
          <SectionList
            sections={DATA}
            renderItem={({item, index}) => {
              const BGC = COLORS[index % COLORS.length];
              return <SearchCard cstmstyle={BGC} text={item} />;
            }}
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
