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
    fontSize: 35,
    textAlign: 'center',
    marginBottom: '15%',
  },
  textcontainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: '70%',
  },
  BBGstyle: {
    backgroundColor: 'black',
    borderWidth: 2,
    borderColor: 'white',
  },
  BTstyle: {
    color: 'white',
  },
  Googlestyle:{
    height: 25,
    width: 25,
    marginLeft: '2%'
  },
  Phonestyle: {
    height: 35,
    width: 35,
  },
  Facebookstyle: {
    height: 20,
    width: 20,
    marginLeft: '2.5%',
    marginTop: '1%'
  }
});
