import { Video } from '../youtube/models/search-item.model';

export interface YoutubeState {
  youtube: Youtube;
}

export interface Youtube {
  youtubeVideos: Video[];
  customVideos: any[];
}
