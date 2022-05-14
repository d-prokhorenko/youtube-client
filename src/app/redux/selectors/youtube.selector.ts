import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Youtube } from '../state.model';

const getYoutubeVideos = createFeatureSelector<Youtube>('youtube');

export const getYoutubeVideoById = (id: string) => {
  return createSelector(getYoutubeVideos, (state) => {
    return state.youtubeVideos.find((video) => video.id === id);
  });
};
