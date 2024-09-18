import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const fetchSpotifyToken = async () => {
  try {
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    params.append('client_id', '858ad821fcbf47c9b0966bd624f12c07'); // Your client ID
    params.append('client_secret', 'e6fb9be9dfeb4ebd9f365c7af7443599'); // Your client secret

    const accessToken = await AsyncStorage.getItem('access_token');

    // console.log('This is my Access Token (Valid for 1 hour) :', accessToken);

    // if (accessToken) {
    //   return accessToken;
    // }

    // if (!accessToken) {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      params.toString(), // Ensure it's properly stringified
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', // Required for form data
        },
      },
    );

    const {access_token} = response.data;
    // console.log('New Access token:', access_token);

    await AsyncStorage.setItem('access_token', access_token); // Save the token in AsyncStorage (for React Native)
    return access_token;
    // }
  } catch (error: any) {
    console.error(
      'Error fetching access token:',
      error.response?.data || error,
    );
  }
};

export const GetCategories = async () => {
  try {
    const accesstoken = await AsyncStorage.getItem('access_token');
    // console.log('This is accesstoken fetched from above access token fetching function ========>', accesstoken);

    const Categories = await axios.get(
      'https://api.spotify.com/v1/browse/categories',
      {
        headers: {Authorization: 'Bearer ' + accesstoken},
      },
    );
    // console.log('Categories ========>', JSON.stringify(Categories,null,2));
    return Categories;
  } catch (error) {
    console.log('error', error);
  }
};

export const GetGenres = async () => {
  try {
    const accesstoken = await AsyncStorage.getItem('access_token');
    const Genres = await axios.get(
      'https://api.spotify.com/v1/recommendations/available-genre-seeds',
      {
        headers: {Authorization: 'Bearer ' + accesstoken},
      },
    );
    // console.log('Genres ========>', Genres);
    return Genres;
  } catch (error) {
    console.log('error', error);
  }
};

export const GetArtist = async () => {
  try {
    const accesstoken = await AsyncStorage.getItem('access_token');
    // console.log(accesstoken);
    const response = await axios.get(
      'https://api.spotify.com/v1/browse/new-releases',
      {
        headers: {Authorization: 'Bearer ' + accesstoken},
      },
    );
    return response;
  } catch (error) {
    console.log('error fetching artists :', error);
  }
};

export const GetTracks = async () => {
  try {
    const accesstoken = await AsyncStorage.getItem('access_token');
    const Tracks = await axios.get(
      'https://api.spotify.com/v1/tracks?ids=7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B',
      {
        headers: {Authorization: 'Bearer ' + accesstoken},
      },
    );
    
    return Tracks
  } catch (error) {
    console.log('error fetching artists :', error);
  }
};

export const GetTopPicks = async () => {
  try {
    const accesstoken = await AsyncStorage.getItem('access_token');
    const response = await axios.get(
      'https://api.spotify.com/v1/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA',
      {
        headers: {Authorization: 'Bearer ' + accesstoken},
      },
    );
    return response
  } catch (error) {
    console.log('error fetching artists :', error);
  }
}
// export const getFeaturedPlaylist = async () => {
//   try {
//     const accesstoken = await AsyncStorage.getItem('access_token');
//       let config = {
//           method: 'get',
//           maxBodyLength: Infinity,
//           url: 'https://api.spotify.com/v1/browse/featured-playlists',
//           headers: {
//               Authorization: 'Bearer ' + accesstoken
//           }
//       };
//       const response = await axios.request(config);
//       return response.data;
//   } catch (error) {
//       throw error;
//   }
// };
