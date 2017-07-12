import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Welcome from './screens/Welcome';
import Video from './screens/Video';
import BookTour from './screens/BookTour';
import {TabNavigator} from 'react-navigation';

export default class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
      welcome: {screen: Welcome},
      main:{
        screen:TabNavigator({
          video: {screen: Video},
          bookTour: {screen: BookTour}
        })
      }
    },
    {
      navigationOptions: {
        tabBarVisible: false
      },
      lazy: true
    }
    );
    return (
      <MainNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
