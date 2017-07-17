/**
 * Created by chris.ho on 7/14/17.
 */
import {FETCH_YOUTUBE_CHANNEL_LIST} from './types';
import axios from 'axios';
const KEY = 'AIzaSyACgRURoXEhs-wuud0duASNmyO55ETa1f4';
const PLAY_LIST_ID = 'UUB6mX5VApSvCsEdJRA-jn2Q';
const API_URL = `https://www.googleapis.com/youtube/v3/playlistItems?maxResults=25&part=snippet&playlistId=${PLAY_LIST_ID}&key=${KEY}`;

export const fetchYouTubeChannelList = () => async dispatch => {
  try {
    let {data} = await axios.get(API_URL);
    dispatch({
      type: FETCH_YOUTUBE_CHANNEL_LIST,
      payload: data.items
    });
  } catch (e) {
    console.log(e);
  }

};