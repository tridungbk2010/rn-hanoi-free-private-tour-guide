import React, {Component} from "react";
import {View, Text, Animated} from "react-native";
import {Icon} from 'react-native-elements';

class News extends Component {
  static navigationOptions = {
    title: "News",
    tabBarIcon: ({tintColor}) => (
      <Icon
        name='newspaper-o'
        size={30}
        type='font-awesome'
        color={tintColor}
      />
    )
  };

  render() {
    return (
      <View>
        <Text>News</Text>
      </View>
    );
  }
}

export default News;