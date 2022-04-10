import { Action } from '@ngrx/store';

export class SearchVideos implements Action {
  readonly type = 'SEARCH_VIDEOS';

  constructor(public payload: string) {}
}
