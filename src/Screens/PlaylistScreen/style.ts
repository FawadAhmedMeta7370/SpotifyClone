import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000ea',
    height: 950
  },
  imagecontainer: {
    marginTop: '5%',
    width: '100%',
    height: '40%',
    alignItems: 'center'
  },
  image: {
    height: '75%',
    width: '60%'
  },
  textStyle: {
    color: 'white',
    fontSize: 16,
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
    margin: 10,
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
});
