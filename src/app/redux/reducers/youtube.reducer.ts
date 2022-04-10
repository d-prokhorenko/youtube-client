import { CustomItem } from 'src/app/youtube/models/custom-item.model';
import { Video } from 'src/app/youtube/models/search-item.model';
import { AddCustomVideo } from '../actions/custom-video.action';
import { SearchVideos } from '../actions/search.action';

interface IState {
  videos: Video[];
  customVideos: CustomItem[];
}

const initialState: IState = {
  videos: [],
  customVideos: [],
};

function videosReducer(videos: Video[], action: SearchVideos): Video[] {
  switch (action.type) {
    case 'SEARCH_VIDEOS': {
      console.log(action.type);
      console.log(action.payload);
      return videos;
    }
    default:
      return videos;
  }
}

function customVideosReducer(
  customVideos: CustomItem[],
  action: AddCustomVideo
): CustomItem[] {
  switch (action.type) {
    case 'ADD_VIDEO': {
      return [...customVideos, action.payload];
    }
    default:
      return customVideos;
  }
}

export function youtubeReducer(
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state: IState = initialState,
  action: any
): IState {
  return {
    videos: videosReducer(state.videos, action),
    customVideos: customVideosReducer(state.customVideos, action),
  };
}
