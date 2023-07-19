import {StyleSheet, Dimensions} from 'react-native';
import {Fonts} from '../../../scr/utils/fonts';

//Packages
const {width, height} = Dimensions.get('window');
//Files
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f97ff',
  },
  header: {
    height: height * 0.08,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: width * 0.005,
    borderBottomLeftRadius: width * 0.05,
    borderBottomRightRadius: width * 0.05,
    paddingHorizontal: width * 0.03,
  },
  logo: {
    width: width * 0.04,
  },
  uperBody: {
    backgroundColor: '#2f97ff',
    height: height * 0.16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingLine: {
    width: '75%',
    position: 'absolute',
  },
  loadingLineAbsolut: {
    width: '75%',
    position: 'absolute',
    // bottom:width * .0
  },
  wifi: {
    // marginTop: 12,
    width: width * 0.1,
    height: height * 0.05,
    position: 'absolute',
  },
  wifiAbsulute: {
    // marginTop: 11,
    width: width * 0.1,
    height: height * 0.05,
    position: 'absolute',
  },
  lowerBody: {
    backgroundColor: 'white',
    height: height * 0.76,
    borderTopLeftRadius: width * 0.1,
    borderTopRightRadius: width * 0.1,
    paddingTop: height * 0.04,
  },

  imageBox: {
    height: height * 0.28,
    width: width * 0.44,
    backgroundColor: '#003a64',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    elevation: width * 0.02,
    borderRadius: width * 0.05,
  },
  brakeText: {
    color: 'white',
    fontSize: height * 0.025,
    fontFamily: Fonts.Montserrat,
    bottom: height * 0.05,
    alignSelf: 'center',
  },
  imageText: {
    color: 'white',
    fontSize: height * 0.02,
    position: 'absolute',
    fontFamily: Fonts.Montserrat,
    top: height * 0.01,
    alignSelf: 'center',
  },
  image1: {
    alignSelf: 'center',
    width: '90%',
    height: '60%',
    borderRadius: width * 0.01,
  },
  image2: {
    alignSelf: 'center',
    width: '90%',
    height: '60%',
    borderRadius: width * 0.01,
  },
  image3: {
    width: '90%',
    height: '60%',
    alignSelf: 'center',
    borderRadius: width * 0.01,
  },
  image4: {
    width: '65%',
    bottom: 93,
    alignSelf: 'center',
  },
});
