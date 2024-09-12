import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  rootContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    // marginBottom:25
    // paddingBottom: 20
  },
  imageStyle: {
    width: 65,
    height: 65,
    margin: 5,
  },
  textStyle: {
    color: 'gray',
    fontSize: 16,
  },
  titleTextStyle: {
    marginVertical: 5,
    textAlignVertical: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: '900',
  },
  lyricsText: {
    backgroundColor: '#c5c4c4',
    color: 'black',
    paddingHorizontal: 3,
    fontSize: 10,
    textAlignVertical: 'center',
    fontWeight: 'bold',
    marginRight: 4,
    borderRadius: 2,
    height: 15,
    marginTop: 4,
  },
});
