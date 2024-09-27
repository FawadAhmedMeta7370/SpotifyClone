import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#000000ea',
    paddingHorizontal: 5,
    marginBottom: '75%',
  },
  imagecontainer: {
    marginTop: '5%',
    width: '100%',
    height: '30%',
    alignItems: 'center',
  },
  image: {
    height: '90%',
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: '5%',
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
    opacity: 0.5,
  },
  HeaderStyle: {
    alignItems: 'center'
  }
});
