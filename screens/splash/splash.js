import React, {Component} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ActivityIndicator,
  StatusBar,
  Dimensions,
} from 'react-native';

//Packages
import {Fonts} from '../../scr/utils/fonts';

// import { Fonts } from '../../assets/fonts';
import styles from './style';
const {width, height} = Dimensions.get('window');

export default class Splash extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="black"
          barStyle="default"
          hidden={true}
          showHideTransition={'fade'}></StatusBar>

        <View style={styles.logoContainer}>
          <View
            style={{
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: width * 0.15,
                  color: 'white',
                  fontFamily: Fonts.Montserrat,

                  bottom: height * 0.009,
                  left: width * 0.03,
                }}>
                T
              </Text>
              <Text
                style={{
                  fontSize: width * 0.07,
                  color: 'white',
                  fontFamily: Fonts.Montserrat,
                }}>
                RAILER
              </Text>
              <Text
                style={{
                  fontSize: width * 0.15,
                  color: 'white',
                  bottom: height * 0.009,
                  fontFamily: Fonts.Montserrat,
                  left: width * 0.003,
                }}>
                {' '}
                S
              </Text>
              <Text
                style={{
                  fontSize: width * 0.07,
                  fontFamily: Fonts.Montserrat,
                  color: 'white',
                }}>
                OCKET
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: width * 0.15,
                  color: 'white',
                  fontFamily: Fonts.Montserrat,
                  bottom: height * 0.009,
                  left: width * 0.03,
                }}>
                T
              </Text>
              <Text
                style={{
                  fontSize: width * 0.07,
                  color: 'white',
                  fontFamily: Fonts.Montserrat,

                  // fontStyle:'notoserif',
                }}>
                ESTER
              </Text>
            </View>
          </View>
          <Image
            resizeMode="contain"
            style={styles.logo}
            source={require('../../images/LELogo.png')}></Image>
        </View>

        <View
          style={{
            width: width * 1,
            height: height * 0.3,
            alignItems: 'center',
            // paddingVertical: height * 0.1,
          }}>
          <Text style={styles.textStyle1}>Human Connectivity Evolved</Text>

          <ActivityIndicator
            size="large"
            color="white"
            style={styles.activityIndi}
          />
        </View>
      </View>
    );
  }
}
