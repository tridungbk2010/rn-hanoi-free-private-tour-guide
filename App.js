// import {registerRootComponent} from 'expo';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './store';

import Welcome from './screens/Welcome';
import Video from './screens/Video';
import News from './screens/News';
import Places from './screens/Places';
import BookTour from './screens/BookTour';
import {TabNavigator} from 'react-navigation';

export default class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({
        welcome: {screen: Welcome},
        main: {
          screen: TabNavigator({
            places: {screen: Places},
            bookTour: {screen: BookTour},
            video: {screen: Video},
            news: {screen: News}
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
      <Provider store={store}>
        <MainNavigator />
      </Provider>

    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   }
// });

// registerRootComponent(App);