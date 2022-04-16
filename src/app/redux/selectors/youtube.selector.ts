import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Video } from 'src/app/youtube/models/search-item.model';

const getYoutubeVideos = createFeatureSelector('youtubeVideos');

export const getYoutubeVideoById = (id: string) => {
  return createSelector(getYoutubeVideos, (videos) => {
    return (videos as Video[]).find((video: Video) => video.id === id);
  });
};
