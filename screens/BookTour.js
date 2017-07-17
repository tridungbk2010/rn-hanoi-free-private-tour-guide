import React, {Component} from "react";
import {View, Text} from "react-native";
import {Icon} from 'react-native-elements';

class BookTour extends Component {
  static navigationOptions = {
    title:'Book Tour',
    tabBarIcon:({tintColor}) => (
      <Icon
        name='heartbeat'
        size={30}
        type='font-awesome'
        color={tintColor}
      />
    )
  };
  render() {
    return (
      <View>
      <Text>Book tour</Text>
      </View>
    );
  }
}

export default BookTour;