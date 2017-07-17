import React, {Component} from "react";
import {View, ScrollView, Text, Dimensions} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slide extends Component {
  renderSlideItem = (index, slide) => {
    if(index === this.props.data.length - 1){
      return (
        <View
          key={index}
          style={[styles.slideStyle]}
        >
          <Text style = {styles.textStyle}>{slide.text}</Text>
        </View>
      )
    }else {
      return (
        <View
          key={index}
          style={styles.slideStyle}
        >
          <Text style = {styles.textStyle}>{slide.text}</Text>
        </View>
      )
    }
  };

  render() {
    return (
      <ScrollView
        horizontal
        style={{flex: 1}}
        pagingEnabled
      >
        {this.props.data.map((slide, index) => this.renderSlideItem(index, slide))}
      </ScrollView>
    );
  }
}

const styles = {
  slideStyle: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width:SCREEN_WIDTH
  },
  textStyle:{
    fontSize:24,
    color:'#fff',
    textAlign:'center',
    backgroundColor: 'rgba(0,0,0,0)'
  }
};

export default Slide;