import React, {Component} from "react";
import {View, Text, Image} from "react-native";
import Slide from '../components/Slide';
import {Button} from 'react-native-elements';

const DATA = [
  {
    id: 1,
    text: 'We guide for free',
    color: '#2196F3'
  },
  {
    id: 2,
    text: 'We arrange your schedule or do it yourself',
    color: '#009688'
  },
  {
    id: 3,
    text: 'We are ready within 1 hour',
    color: '#4CAF50'
  },
  {
    id: 4,
    text: 'Enjoin free tour',
    color: '#fff'
  }
];

class Welcome extends Component {
  onSlidesComplete = () => {
    this.props.navigation.navigate("main");
  };

  render() {
    return (
      <Image source={require('../assets/images/bg_welcom_screen.png')} style={styles.bgImage}>
        <View style={styles.overlayBg}>
          <View style={styles.containLogoStyle}>
            <Image style={styles.logoStyle}
                   source={require('../assets/images/logo_tour.png')}/>
          </View>
          <Slide data={DATA} onSlidesComplete={this.onSlidesComplete}/>
          <Button
            buttonStyle={styles.btnStyle}
            title={"Book now"}
            onPress={this.onSlidesComplete}
          />
        </View>
      </Image>
    );
  }
}

const styles = {
  bgImage: {
    flex: 1,
    resizeMode: 'cover'
  },
  overlayBg: {
    flex: 1,
    backgroundColor: `rgba(0,0,0,.5)`
  },
  btnStyle: {
    marginBottom: 20,
    backgroundColor: "#39B54A",
    borderRadius: 8
  },
  containLogoStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoStyle: {
    width: 100,
    resizeMode: 'contain'
  }
};

export default Welcome;