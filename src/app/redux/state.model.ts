import { Video } from '../youtube/models/search-item.model';

export interface YoutubeState {
  youtube: {
    videos: Video[];
    customVideos: any[];
  };
}
