import React, {Component} from "react";
import {View, Text} from "react-native";
import {Icon} from 'react-native-elements';

class Video extends Component {
  static navigationOptions = {
    title:'Video',
    tabBarIcon:({tintColor}) => (
      <Icon name={"movie"}
            size={30}
            color={tintColor}
      />
    )
  };

  render() {
    return (
      <View>
      <Text>Video</Text>
      </View>
    );
  }
}

export default Video;