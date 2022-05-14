import { CustomItem } from 'src/app/youtube/models/custom-item.model';
import { Video } from 'src/app/youtube/models/search-item.model';

interface Action {
  type: string;
  payload?: any;
}

export interface IState {
  youtubeVideos: Video[];
  customVideos: CustomItem[];
}

export const initialState: IState = {
  youtubeVideos: [],
  customVideos: [],
};

function filterByDate(videos: Video[], isAscending: boolean): Video[] {
  let res: Video[] = [];
  if (isAscending) {
    res = videos.sort(
      (item1: Video, item2: Video) =>
        new Date(item1.snippet.publishedAt).getTime() -
        new Date(item2.snippet.publishedAt).getTime()
    );
  } else {
    res = videos.sort(
      (item1: Video, item2: Video) =>
        new Date(item2.snippet.publishedAt).getTime() -
        new Date(item1.snippet.publishedAt).getTime()
    );
  }
  return res;
}

function filterByViews(videos: Video[], isAscending: boolean): Video[] {
  let res: Video[] = [];
  if (isAscending) {
    res = videos.sort(
      (item1: Video, item2: Video) =>
        new Date(item1.statistics.viewCount).getTime() -
        new Date(item2.statistics.viewCount).getTime()
    );
  } else {
    res = videos.sort(
      (item1: Video, item2: Video) =>
        new Date(item2.statistics.viewCount).getTime() -
        new Date(item1.statistics.viewCount).getTime()
    );
  }
  return res;
}

export function videosReducer(videos: Video[], action: Action): Video[] {
  switch (action.type) {
    case 'VIDEOS_LOAD_SUCCESS': {
      return action.payload;
    }
    case 'FILTER_BY_DATE': {
      return filterByDate([...videos], action.payload);
    }
    case 'FILTER_BY_VIEWS': {
      return filterByViews([...videos], action.payload);
    }
    default:
      return videos;
  }
}

export function customVideosReducer(
  customVideos: CustomItem[],
  action: Action
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
  action: Action
): IState {
  return {
    youtubeVideos: videosReducer(state.youtubeVideos, action),
    customVideos: customVideosReducer(state.customVideos, action),
  };
}
