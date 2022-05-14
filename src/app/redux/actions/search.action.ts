interface Action {
  type: string;
  payload?: any;
}

export class LoadVideos implements Action {
  readonly type = 'LOAD_VIDEOS';

  constructor(public payload: string) {}
}
