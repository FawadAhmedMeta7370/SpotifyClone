import {ImageSourcePropType} from 'react-native';
import {NavigationAction, NavigationProp, ParamListBase} from '@react-navigation/native';

export interface ILogin {
    navigation?: any
}

type NullableImageSource = ImageSourcePropType | null;
export interface ICustomButton {
  children?: string;
  BTstyle?: object;
  BBGstyle?: object;
  image?: NullableImageSource;
  Istyle?: object;
  Cstyle?: object
  onPress?: () => void;
}

// type NavigationType = NavigationProp<ParamListBase>;
export interface ILogin {
  navigation?: any;
}

export interface ITextInput {
    children?: any,
    cstmstyle?: object
}

export interface ISignupScreen {
    navigation?: any
}