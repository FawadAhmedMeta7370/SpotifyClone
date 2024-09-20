import {styles} from './style';
import Share from 'react-native-share';
import List from '../../Components/List/List';
import {Image, Text, View} from 'react-native';
import {images} from '../../Assets/Images/Images';
import {GetAlbumSongs} from '../../API/AcessToken';
import {IPlaylistScreen} from '../../Interface/Interface';
import {FC, useEffect, useLayoutEffect, useState} from 'react';
import IconButton from '../../Components/IconButton/IconButton';

interface Song {
  id: any;
  duration_ms: number;
  preview_url: string | null;
}
interface Tracks {
  items: Song[];
}
interface Songs {
  tracks: Tracks;
  artists: {name: string}[];
}

const PlaylistScreen: FC<IPlaylistScreen> = ({route, navigation}) => {
  const [songs, setsongs] = useState<Songs | null>(null);
  const [artistName, setArtistName] = useState<string>('');

  const {albumid} = route.params;

  useLayoutEffect(() => {
    async function fetchsongs() {
      try {
        const response = await GetAlbumSongs(albumid);

        // Filter out songs that don't have a preview_url
        const filteredSongs = response?.data.tracks.items.filter(
          (item: {preview_url: any}) => item.preview_url,
        );

        // Set the filtered songs to state
        setsongs({
          ...response?.data,
          tracks: {
            ...response?.data.tracks,
            items: filteredSongs, // only songs with a preview_url
          },
        });

        const artist = await response?.data.artists[0]?.name;
        setArtistName(artist);
      } catch (error) {
        console.log("Error fetching songs using ID's");
      }
    }
    fetchsongs();
  }, [albumid]);

  function backButtonHandler() {
    navigation.goBack();
  }

  function MusicPlayerHandler(id: any) {
    const currentSongIndex = songs?.tracks.items.findIndex(
      song => song.id === id,
    );

    navigation.navigate('MusicPlay Screen', {
      songId: id,
      songsList: songs?.tracks.items, // Pass the list of songs
      // currentSongIndex: currentSongIndex, // Pass the current song index
    });
  }

  console.log("songs?.tracks.items0", songs?.tracks.items);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return (
          <IconButton
            onPress={backButtonHandler}
            name="chevron-back-outline"
            color="white"
            cstmstyle={{marginHorizontal: 0}}
          />
        );
      },
    });
  }, []);

  const [formattedTime, setFormattedTime] = useState('');
  useEffect(() => {
    if (!songs || songs.tracks.items.length === 0) return;

    const totalDurationMs = songs?.tracks.items.reduce(
      (acc: any, song: {duration_ms: any}) => acc + song.duration_ms,
      0,
    );

    const hours = Math.floor(totalDurationMs / 3600000); // 1 hour = 3600000 ms
    const minutes = Math.floor((totalDurationMs % 3600000) / 60000); // 1 minute = 60000 ms
    const seconds = Math.floor((totalDurationMs % 60000) / 1000); // 1 second = 1000 ms

    const formatted = `${hours}h ${minutes}m ${seconds}s`;

    setFormattedTime(formatted);
  }, [songs]);

  console.log('songs ==========>>>>', songs);

  function share() {
    const options = {
      title: 'Sharing Song',
      message: 'Check out this song',
      // url: songs?.data.preview_url,
    };
    Share.open(options)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  }

  return (
    <View style={styles.container}>
      {/* <View style={styles.imagecontainer}> */}
      <Image style={styles.image} source={images.CardPic} />
      {/* </View> */}
      {artistName && (
        <Text style={styles.textStyle}>
          Tune in to Top Tracks from {artistName}
        </Text>
      )}
      <View style={{flexDirection: 'row'}}>
        <Image style={styles.logoStyle} source={images.SpotifyGreenLogo} />
        <Text style={styles.spotifyText}>Spotify</Text>
      </View>
      <View>
        <Text style={styles.textStyle}>Duratoin. {formattedTime} </Text>
        {/* <Text style={styles.textStyle}>Tracks. {} </Text> */}
      </View>
      <View style={styles.logoscontainer}>
        <View style={{flexDirection: 'row'}}>
          <IconButton
            cstmstyle={{marginHorizontal: 10}}
            name="heart-outline"
            color={'white'}
          />
          <IconButton name="ellipsis-vertical-outline" color={'white'} />
        </View>
        <Image style={styles.playLogoStyle} source={images.PlayGreenLogo} />
      </View>

      <List
        data={songs?.tracks?.items}
        onPress={(id: any) => MusicPlayerHandler(id)}
        share={share}
      />
    </View>
  );
};

export default PlaylistScreen;
