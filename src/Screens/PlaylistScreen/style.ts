import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000ea',
  },
  imagecontainer: {
    marginTop: '5%',
    width: '100%',
    height: '40%',
    alignItems: 'center',
  },
  image: {
    height: '40%',
    width: '70%',
    alignItems: 'center',
    marginVertical: '5%',
    marginLeft: '15%',
  },
  textStyle: {
    color: 'white',
    fontSize: 17,
    marginLeft: 10,
  },
  logoStyle: {
    width: 35,
    height: 35,
    margin: 10,
  },
  spotifyText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '900',
    textAlignVertical: 'center',
  },
  playLogoStyle: {
    width: 80,
    height: 80,
  },
  logoscontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pressed: {
    opacity: 0.5
  }
});
