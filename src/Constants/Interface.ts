import { ImageSourcePropType } from 'react-native';

export interface ILogin{
}

type NullableImageSource = ImageSourcePropType | null;
export interface ICustomButton {
    children?: string
    BTstyle?: object
    BBGstyle?: object
    image?: NullableImageSource
    Istyle?: object
}

export interface ILogin {
}