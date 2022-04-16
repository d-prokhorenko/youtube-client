/* eslint-disable @typescript-eslint/indent */
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs';
import { DataService } from 'src/app/youtube/services/data.service';

interface Action {
  type: string;
  payload: any;
}

@Injectable()
export class YoutubeEffect {
  constructor(private actions$: Actions, private dataService: DataService) {}

  public getVideos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType('LOAD_VIDEOS'),
      switchMap((action: Action) => this.dataService.getData(action.payload)),
      map((videos) => ({ type: 'VIDEOS_LOAD_SUCCESS', payload: videos }))
    );
  });
}
