import axios from 'axios';
import Store from '../Redux/Store/Store';
import { logOut } from '../Redux/Slices/AuthSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';


const axiosInstance = axios.create({
  baseURL: 'https://accounts.spotify.com/api',
  // other configurations
})

const APIInstance = axios.create({
  baseURL: 'https://api.spotify.com/v1',
})
console.log("Store.getState()?.auth?.accessToken", Store.getState());

APIInstance.interceptors.request.use(
  (config) => {
    // Get the latest accessToken from the Redux store
    const token = Store.getState()?.auth?.accessToken;

    if (token) {
      // If token exists, set it in the Authorization header
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error); // Handle any request errors
  }
);

APIInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      Store.dispatch(logOut())
    }
    return Promise.reject(error)
  },
)

export const fetchSpotifyToken = async () => {
  try {
    const params = new URLSearchParams();
    params.append('grant_type', 'client_credentials');
    params.append('client_id', '1feaaaca9dc54e1799b6ebe5b34550ba'); // My Client ID
    params.append('client_secret', '151e11a8150b4592aafad9f1338e93a7'); // My Client Secret

    const accessToken = await AsyncStorage.getItem('access_token');

      const response = await axiosInstance.post(
        '/token',
        params.toString(),
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
    const Categories = await APIInstance.get(
      '/browse/categories',
    );
    return Categories;
  } catch (error) {
    console.log('error', error);
  }
};

export const GetGenres = async () => {
  try {
    const Genres = await APIInstance.get(
      '/recommendations/available-genre-seeds',
    );
    return Genres;
  } catch (error) {
    console.log('error', error);
  }
};

export const GetArtist = async () => {
  try {
    const response = await APIInstance.get(
      '/browse/new-releases',
    );
    return response;
  } catch (error) {
    console.log('error fetching artists :', error);
  }
};

export const GetTracks = async () => {
  try {
    const Tracks = await APIInstance.get(
      '/tracks?ids=7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B',
    );

    return Tracks;
  } catch (error) {
    console.log('error fetching artists :', error);
  }
};

export const GetTopPicks = async () => {
  try {
    const response = await APIInstance.get(
      '/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA',
    );
    return response;
  } catch (error) {
    console.log('error fetching artists :', error);
  }
};

export const GetAlbumSongs = async (albumId: string | undefined) => {
  try {
    const response = await APIInstance.get(
      `/albums/${albumId}`,
    );
    // const Preview = response.data.items.filter((track: any) => track.preview_url);
    // return { ...response, items: Preview };
    return response;
  } catch (error) {
    console.log('error fetching playlist :', error);
  }
};

export const GetSong = async (songid: string | undefined) => {
  try {
    const response = await APIInstance.get(
      `/tracks/${songid}`,
    );
    return response;
  } catch (error) {
    console.log('error fetching songs :', error);
  }
};
