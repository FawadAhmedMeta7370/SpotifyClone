import {ColorValue, GestureResponderEvent, ImageSourcePropType, StyleProp, ViewStyle} from 'react-native';
// import {NavigationAction, NavigationProp, ParamListBase} from '@react-navigation/native';

export interface ILogin {
  navigation?: any;
}

type NullableImageSource = ImageSourcePropType | null;
export interface ICustomButton {
  children?: string;
  BTstyle?: object;
  BBGstyle?: object;
  image?: NullableImageSource;
  Istyle?: object;
  Cstyle?: object;
  onPress?: () => void;
}

// type NavigationType = NavigationProp<ParamListBase>;
export interface ILogin {
  navigation?: any;
}

export interface ITextInput {
  children?: string;
  cstmstyle?: object;
  iconColor?: string | number | ColorValue;
  icon?: string;
}

export interface ISignupScreen {
  navigation?: any;
}

export interface IHomeScreen {
  navigation?: any;
}

export interface ICustomTitle {
  fs?: object
  text?: string
  cstmstyle?: object;
  children?: string;
  containerstyle?: object;
}

export interface IIconButton {
  name?: string | null | any;
  color?: string | number | ColorValue;
  onPress?: any;
  cstmstyle?: StyleProp<ViewStyle>;
  cstmsize?: number;
}

interface Artist {
  id: string;
  name: string;
  images: {url: string; height: number; width: number}[];
}
interface Playlist {
  id: string;
  name: string;
  images: {url: string; height: number; width: number}[];
  description: string;
}
export interface ICard {
  onPress?: () => void;
  data?: (Artist | Playlist)[];
  item?: any;
  imageUrl?: NullableImageSource;
  ArtistName?: string;
  AlbumName?: string;
  SongName?: string;
  type?: 'artist' | 'trending' | 'top';
}

export interface ISearchScreen {
  navigation?: any;
}

export interface ISearch {}

export interface ISearchCard {
  text?: string;
  onPress?: any;
  cstmstyle?: any;
}

export interface IPlaylistScreen {
  navigation?: any;
  route?: any
}

export interface IList {
  ListHeaderComponent?: any
  data?: any
  share?: ((event: GestureResponderEvent) => void)
  onPress?: any;
}

export interface IListCard {
  share?: ((event: GestureResponderEvent) => void)
  item?: any
  onPress?: any;
}

export interface IMusicPlayerScreen {
  navigation?: any;
  route?: any
}

export interface ILogoButton {
  source?: ImageSourcePropType;
  onPress?: any;
  cstmstyle?: object;
  containerstyle?: object;
}

export interface ICardList {
  type?: 'artist' | 'trending' | 'top';
  data?: any;
  onPress?: ((event: GestureResponderEvent) => void);
}
