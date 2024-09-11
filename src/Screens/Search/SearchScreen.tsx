import {FC} from 'react';
import {View} from 'react-native';
import {ISearchScreen} from '../../Interface/Interface';
import CustomTitle from '../../Components/CustomTitle/CustomTitle';
import SearchBar from '../../Components/Search/SearchBar';
import SearchCard from '../../Components/SearchCard/SearchCard';

const SearchScreen: FC<ISearchScreen> = () => {
  return (
    <>
      <View style={{flex: 1, backgroundColor: '#000000ea'}}>
        <CustomTitle cstmstyle={{fontSize: 40}}>Search</CustomTitle>
        <SearchBar />
        <View>
          <CustomTitle>Your top genres</CustomTitle>
          <View style={{flexDirection: 'row'}}>
            <SearchCard>Pop</SearchCard>
            <SearchCard>Bollywood</SearchCard>
          </View>
          <CustomTitle>Browse all</CustomTitle>
          <View style={{flexDirection: 'row'}}>
            <SearchCard>Podcasts</SearchCard>
            <SearchCard>New Releases</SearchCard>
          </View>
          <View style={{flexDirection: 'row'}}>
            <SearchCard>Charts</SearchCard>
            <SearchCard>Concerts</SearchCard>
          </View>
          <View style={{flexDirection: 'row'}}>
            <SearchCard>Made for You</SearchCard>
            <SearchCard>At Home</SearchCard>
          </View>
        </View>
      </View>
    </>
  );
};

export default SearchScreen;
