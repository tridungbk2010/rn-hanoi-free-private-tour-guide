import React, {Component} from "react";
import {View, Text, Animated, PanResponder, Image, Dimensions} from "react-native";
import {Icon} from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;

class Places extends Component {
  static navigationOptions = {
    title: "Places",
    tabBarIcon: ({tintColor}) => (
      <Icon
        name='map-marker'
        size={30}
        type='font-awesome'
        color={tintColor}
      />
    )
  };

  constructor(props) {
    super(props);

    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({x: gesture.dx, y: gesture.dy});
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          this.forceSwipe('right');
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          this.forceSwipe('left');
        } else {
          this.resetPosition();
        }
      }
    });
    this.state = {panResponder, position};
  }

  getLayoutStyle = () => {
    const {position} = this.state;
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ['-120deg', '0deg', '120deg']
    });

    return {
      ...this.state.position.getLayout(),
      transform: [{rotate}]
    }
  };

  resetPosition = () => {
    Animated.spring(this.state.position, {
      toValue: {x: 0, y: 0}
    }).start();
  };

  forceSwipe = direction => {
    const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;

    Animated.timing(this.state.position, {
      toValue: {x, y: 0},
      duration: 250
    }).start();

  };

  render() {
    return (
      <View style={styles.placesStyle}>
        <Animated.View
          style={this.getLayoutStyle()}
          {...this.state.panResponder.panHandlers}>
          <Image style={styles.logoStyle}
                 source={require('../assets/images/logo_tour.png')}/>
          <Text style={styles.textStyle}>Places in Hanoi </Text>
        </Animated.View>
      </View>
    );
  }
}

const styles = {
  placesStyle: {
    backgroundColor: '#607D8B',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoStyle: {
    width: 150,
    resizeMode: 'center'
  },
  textStyle: {
    fontSize: 24,
    fontWeight: 'bold'
  }
};

export default Places;