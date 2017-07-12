import React, {Component} from "react";
import {View, Text} from "react-native";
import {Icon} from 'react-native-elements';

class BookTour extends Component {
  static navigationOptions = {
    title:"Book Tour",
    tabBarIcon:() => (
      <Icon name={"book"}/>
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