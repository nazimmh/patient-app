/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  StatusBar,
  Image,
} from 'react-native';
import OneSignal from 'react-native-onesignal';
import { Provider } from 'react-redux';
import { COLOR, ThemeProvider } from 'react-native-material-ui';
import { AppStackNavigator } from './app/config/Navigator';
import configureStore from './app/store';
import Images from './app/config/Images';
import Colors from './app/config/Colors';
import {
  pushNewNotification,
  scheduleNewNotification,
  scheduleNewNotification2,
} from './app/utils/localPushNotification';
import Sound from 'react-native-sound';

const notificationSound = new Sound('cs_rdv.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  console.log(`duration in seconds: ${notificationSound.getDuration()}number of channels: ${notificationSound.getNumberOfChannels()}`);
});

const uiTheme = {
  palette: {
    primaryColor: COLOR.green500,
  },
  toolbar: {
    container: {
      height: 50,
    },
  },
};

export default class App extends Component {

  constructor() {
    super();
    this.store = null;
    this.state = {
      isStoreInitialised: false,
    };
    this.statusBarColor = (Platform.OS === 'ios' ? 'dark-content' : 'light-content');
  }

  componentWillMount() {
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentDidMount() {
    configureStore((store) => {
      this.store = store;
      this.setState({ isStoreInitialised: true });
      // once the app is launched
      // pushNewNotification('Rdv in 10min', "don't forget your appointment");
      // pushNewNotification("Rappel de rendez-vous", "Vous avez une consultation prévu pour demain chez Docteur Aloui");
      // setTimeout(() => {
      //   notificationSound.setVolume(1);
      //   notificationSound.play((success) => {
      //     console.log('successfully played');
      //     console.log(success);
      //   });
      // }, 500);
    });
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onIds(device) {
    console.log('Device info: ', device);
  }

  render() {
    if (!this.state.isStoreInitialised) {
      return (
        <View style={styles.container}>
         <Text style={styles.welcome}>Patient App</Text>
         <Text style={styles.instructions}>this is a medical app for patients to connect with their doctors</Text>
         <Image 
            source={Images.LOGO}
            style={{ width: 350, height: 350, justifyContent: 'center', resizeMode: 'center', margin: 10 }} />
         <ActivityIndicator
             animating
             size={35}
             color={'green'} 
             style={styles.loadingStyle} />
        </View>
      );
    }

    return (
      <Provider store={this.store}>
        <ThemeProvider uiTheme={uiTheme}>
          <View style={{ flex: 1 }}>
            <StatusBar
              backgroundColor={Colors.statusBarBackgroundColor}
              barStyle={this.statusBarColor}
            />
            <AppStackNavigator />
          </View>
        </ThemeProvider>
      </Provider>
    );
  }
}

console.disableYellowBox = true;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: 'black'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginHorizontal: 20,
    marginBottom: 5,
  },
  loadingStyle: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
  },
});
