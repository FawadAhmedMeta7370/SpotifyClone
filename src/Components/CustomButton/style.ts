import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1DB954',
    borderRadius: 30,
    padding: 15,
    marginHorizontal: 35,
    marginBottom: 5,
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  ImgTxtContainer: {
    flexDirection: 'row',
    height: 27
  },
  pressed:{
    opacity: 0.5
  }
});
