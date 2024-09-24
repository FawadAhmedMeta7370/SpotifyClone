import {styles} from './style';
import {FC, useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import {IHomeScreen} from '../../Interface/Interface';
import LinearGradient from 'react-native-linear-gradient';
import CardList from '../../Components/CardList/CardList';
import IconButton from '../../Components/IconButton/IconButton';
import CustomTitle from '../../Components/CustomTitle/CustomTitle';
import {
  fetchSpotifyToken,
  GetArtist,
  GetTopPicks,
  GetTracks,
} from '../../API/AcessToken';
import { useSelector } from 'react-redux';

const HomeScreen: FC<IHomeScreen> = ({navigation}) => {

  const auth = useSelector((state: any) => state.auth)

  console.log("auth object ==> " ,auth);
  

  const [ArtistData, setArtistsData] = useState();
  const [tracksData, setTracksData] = useState();
  const [Recomendations, setRecomendations] = useState();

  async function fetchArtists() {
    // const Token = await fetchSpotifyToken();
    try {
      const response = await GetArtist();
      setArtistsData(response?.data.albums.items);
      // console.log("ArtistData.id ==> " , response?.data.albums.items.map( id => id.id ));
      // console.log("response?.data.albums.items :", response?.data.albums.items);
    } catch (error) {
      console.error('Error fetching artists:', error);
    }
  }

  async function fetchTrending() {
    try {
      const tracks = await GetTracks();
      if (tracks) {
        const filteredTracks = tracks.data.tracks.filter(
          (track: {preview_url: any}) => track.preview_url,
        );

        setTracksData(filteredTracks);
      }
    } catch (error) {
      console.error('Error fetching trending songs:', error);
    }
  }

  async function fetchTopPicks() {
    try {
      const response = await GetTopPicks();
      const TopPicks = response?.data.tracks;

      if (response) {
        // Filter Top Picks to only include those with a preview_url
        const filteredTopPicks = TopPicks.filter(
          (track: {preview_url: any}) => track.preview_url,
        );

        // Set the filtered recommendations data
        setRecomendations(filteredTopPicks);
      }
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  }

  useEffect(() => {
    fetchArtists();
    fetchTrending();
    fetchTopPicks();
  }, []);

  function PlayListNavigationHandler(id: any) {
    navigation.navigate('PlayList Screen', {
      albumid: id,
    });
  }

  function MusicPlayScreenNavigationHandler(id: any) {
    navigation.navigate('MusicPlay Screen', {
      songId: id,
    });
  }

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
                  <IconButton name="log-out-outline" color="white" />
                </View>
              </View>
              <CardList
                type="artist"
                data={ArtistData}
                onPress={(id: any) => PlayListNavigationHandler(id)}
              />
            </View>
            <View>
              <CustomTitle>Trending Now</CustomTitle>
              <CardList
                type="trending"
                data={tracksData}
                onPress={(id: any) => MusicPlayScreenNavigationHandler(id)}
              />
            </View>
            <View>
              <CustomTitle>Top picks for you</CustomTitle>
              <CardList
                type="top"
                data={Recomendations}
                onPress={(id: any) => MusicPlayScreenNavigationHandler(id)}
              />
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </>
  );
};

export default HomeScreen;
