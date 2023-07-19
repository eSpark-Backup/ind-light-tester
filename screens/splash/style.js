import {StyleSheet, Dimensions} from 'react-native';
import {Fonts} from '../../scr/utils/fonts';

//Packages

//Files
const {width, height} = Dimensions.get('window');

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4f87ff',

    // alignItems:'center',
  },
  logoContainer: {
    flex: 1,
    width: width * 1,
    height: height * 0.7,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: height * 0.1,
  },
  logo: {
    width: width * 0.45,
    height: width * 0.45,
  },
  activityIndi: {
    marginVertical: height * 0.03,
    // position: 'relative',
    // bottom: height * 0.0,
  },
  textHeading: {
    flexDirection: 'row',
  },
  textStyle1: {
    color: 'white',
    fontFamily: Fonts.Montserrat,
  },
});
