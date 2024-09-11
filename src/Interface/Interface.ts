import {ColorValue, ImageSourcePropType} from 'react-native';
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
  iconColor?: string | number | ColorValue
  icon?: string
}

export interface ISignupScreen {
  navigation?: any;
}

export interface IHomeScreen {}

export interface ICustomTitle {
  cstmstyle?: object
  children?: string;
}

export interface IIconButton {
  name?: string | null | any;
  color?: string | number | ColorValue;
  onPress?: any;
}

export interface ICard {}

export interface ISearchScreen {}

export interface ISearch {}

export interface ISearchCard{
  children?: string
}