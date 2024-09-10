import {FC} from 'react';
import {TextInput, View} from 'react-native';
import {ITextInput} from '../../Interface/Interface';
import {styles} from './style';

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
