import {FC, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {ITextInput} from '../../Interface/Interface';
import {styles} from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomTextInput: FC<ITextInput> = ({cstmstyle,children}) => {
  return (
    <View style={[styles.inputContainer, cstmstyle]}>
      <TextInput
        style={styles.textStyle}
        placeholderTextColor="black"
        placeholder={children}></TextInput>
    </View>
  );
};

export default CustomTextInput;
