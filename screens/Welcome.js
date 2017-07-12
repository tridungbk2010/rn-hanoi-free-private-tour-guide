import React, {Component} from "react";
import {View, Text} from "react-native";
import Slide from '../components/Slide';

const DATA = [
  {
    id:1,
    text:'We guide for free',
    color:'#2196F3'
  },
  {
    id:2,
    text:'We arrange your schedule or do it yourself',
    color:'#009688'
  },
  {
    id:3,
    text:'We are ready within 1 hour',
    color:'#4CAF50'
  },
  {
    id:4,
    text:'Enjoin free tour',
    color:'#fff'
  }
];

class Welcome extends Component {
  onSlidesComplete = () => {
    this.props.navigation.navigate("main");
  };
  render() {
    return (
      <Slide data = {DATA} onSlidesComplete = {this.onSlidesComplete}/>
    );
  }
}

export default Welcome;