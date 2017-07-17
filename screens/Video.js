import React, {Component} from "react";
import {View, Text, ScrollView, Image, Dimensions} from "react-native";
import {Icon, Card} from 'react-native-elements';
import {connect} from 'react-redux';
import * as actions from '../actions';

// const SCREEN_WIDTH = Dimensions.get('window').width;

class Video extends Component {
  static navigationOptions = {
    title: 'Video',
    tabBarIcon: ({tintColor}) => (
      <Icon
        name='play-circle'
        type='font-awesome'
        size={30}
        color={tintColor}
      />
    )
  };

  componentDidMount() {
    this.props.fetchYouTubeChannelList();
  }

  render() {
    console.log("listVideo", this.props.listVideo[0].snippet.thumbnails.standard.url);
    return (
      <ScrollView style={styles.card}>
        {
          this.props.listVideo.map((video, index) => {
            return (
              <View key={index} style={styles.card}>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={{uri: video.snippet.thumbnails.high.url}}
                />
                <Text style={styles.text}>{video.snippet.description}</Text>
              </View>
            );
          })
        }
      </ScrollView>
    );
  }
}

const styles = {
  card: {
    padding: 10
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover'
  },
  text: {}
};

const mapStateToProps = ({youtube}) => {
  return {listVideo: youtube.channelList}
};

export default connect(mapStateToProps, actions)(Video);