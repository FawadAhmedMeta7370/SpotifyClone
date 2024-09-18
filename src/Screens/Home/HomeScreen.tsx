import {styles} from './style';
import {FC, useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {IHomeScreen} from '../../Interface/Interface';
import LinearGradient from 'react-native-linear-gradient';
import CardList from '../../Components/CardList/CardList';
import IconButton from '../../Components/IconButton/IconButton';
import CustomTitle from '../../Components/CustomTitle/CustomTitle';
import {fetchSpotifyToken, GetArtist, GetTopPicks, GetTracks} from '../../API/AcessToken';

const HomeScreen: FC<IHomeScreen> = ({navigation}) => {
  function PlayListNavigationHandler() {
    navigation.navigate('PlayList Screen');
  }

  const [ArtistData, setArtistsData] = useState();
  const [tracksData, setTracksData] = useState();
  const [Recomendations, setRecomendations] = useState();

  async function fetchArtists() {
    const Token = await fetchSpotifyToken();
    try {
    const response = await GetArtist();
    setArtistsData(response?.data.albums.items);
    console.log("response?.data.albums.items :", response?.data.albums.items);
    } catch (error) {
      console.error('Error fetching artists:', error);
    }
  }

  async function fetchTrending() {
    try {
      const tracks = await GetTracks();
      if (tracks) {
        setTracksData(tracks.data.tracks);
      }
    } catch (error) {
      console.error('Error fetching trending songs:', error);
    }
  }

  async function fetchTopPicks() {
    try {
      const response = await GetTopPicks()
      const TopPicks =  response?.data.tracks
      if (response) {
        setRecomendations(TopPicks)
      }
    } catch (error) {
      console.error('Error fetching recomendations:', error);
    }
  }

  useEffect(() => {
    fetchArtists();
    fetchTrending();
    fetchTopPicks();
  }, []);

  return (
    <>
      <LinearGradient
        style={{flex: 1}}
        colors={['#858181', '#4e4c4c', '#161515']}>
        <ScrollView>
          <View style={styles.rootContainer}>
            <View>
              <View style={styles.titleIcon}>
                <CustomTitle>Made for you</CustomTitle>
                <View style={styles.iconContainer}>
                  <IconButton name="notifications-outline" color="white" />
                  <IconButton name="timer-outline" color="white" />
                  <IconButton name="settings-outline" color="white" />
                </View>
              </View>
              <CardList type='artist' data={ArtistData} onPress={PlayListNavigationHandler}/>
            </View>
            <View>
              <CustomTitle>Trending Now</CustomTitle>
              <CardList type='trending' data={tracksData} onPress={PlayListNavigationHandler}/>
            </View>
            <View>
              <CustomTitle>Top picks for you</CustomTitle>
              <CardList type='top' data={Recomendations} onPress={PlayListNavigationHandler}/>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </>
  );
};

export default HomeScreen;
