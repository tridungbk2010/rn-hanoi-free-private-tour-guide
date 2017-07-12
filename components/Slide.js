import React, {Component} from "react";
import {View, ScrollView, Text, Dimensions} from 'react-native';
import {Button} from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slide extends Component {
  renderSlideItem = (index, slide) => {
    if(index === this.props.data.length - 1){
      return (
        <View
          key={index}
          style={[styles.slideStyle, {backgroundColor: slide.color}]}
        >
          <Text style = {styles.lastTextStyle}>{slide.text}</Text>
          <Button
            buttonStyle = {styles.btnStyle}
            title={"Book now"}
            onPress={this.props.onSlidesComplete}
          />
        </View>
      )
    }else {
      return (
        <View
          key={index}
          style={[styles.slideStyle, {backgroundColor: slide.color}]}
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width:SCREEN_WIDTH
  },
  textStyle:{
    fontSize:20,
    color:'#fff'
  },
  lastTextStyle:{
    fontSize:20,
    color:'#000'
  },
  btnStyle:{
    width:'100%',
    marginTop:10,
    backgroundColor :"#39B54A",
    borderRadius:8
  }
};

export default Slide;