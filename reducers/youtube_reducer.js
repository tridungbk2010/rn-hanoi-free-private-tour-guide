import {FETCH_YOUTUBE_CHANNEL_LIST} from '../actions/types';

const INITIAL_STATE = {
  channelList: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_YOUTUBE_CHANNEL_LIST:
      return {channelList:action.payload};

    default:
      return state;
  }
}
