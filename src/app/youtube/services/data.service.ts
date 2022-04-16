/* eslint-disable @typescript-eslint/indent */
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { pluck, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Video } from '../models/search-item.model';
import { Response } from '../models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  filterSearchValue$: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient) {}

  getData(value: string): Observable<unknown> {
    return this.http
      .get<Response>('https://www.googleapis.com/youtube/v3/search', {
        params: {
          type: 'video',
          part: 'snippet',
          maxResults: 10,
          q: value,
        },
      })
      .pipe(
        pluck('items'),
        map((items) => items.map((v) => v.id.videoId).join(',')),
        switchMap((ids) => this.getStatistics(ids)),
        pluck('items')
      );
  }

  getStatistics(ids: string): Observable<Video> {
    return this.http.get<Video>(
      'https://www.googleapis.com/youtube/v3/videos',
      {
        params: {
          id: ids,
          part: 'snippet,statistics',
        },
      }
    );
  }

  filterBySearch(value: string): void {
    this.filterSearchValue$.next(value);
  }
}
