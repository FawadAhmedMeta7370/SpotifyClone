import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    backgroundColor: 'black',
  },
  image: {
    height: 150,
    width: 150,
  },
  imagecontainer: {
    height: 150,
    width: '100%',
    alignItems: 'center',
    marginTop: '15%',
    marginVertical: '10%',
    justifyContent: 'flex-start',
  },
  text: {
    color: 'white',
    fontWeight: '900',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: '15%',
  },
  textcontainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
  },
  pressed: {
    opacity: 0.5
  }
});
