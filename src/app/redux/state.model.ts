import { Video } from '../youtube/models/search-item.model';

export interface YoutubeState {
  youtube: {
    youtubeVideos: Video[];
    customVideos: any[];
  };
}
