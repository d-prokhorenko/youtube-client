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
  data: Video[] = [];

  dataStream$: Subject<Video[]> = new Subject<Video[]>();

  filterSearchValue$: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient) {}

  getData(value: string): void {
    this.http
      .get<Response>(
        `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&maxResults=10&q=${value}&`
      )
      .pipe(
        pluck('items'),
        map((items) => items.map((v) => v.id.videoId).join(',')),
        switchMap((ids) => this.getStatistics(ids)),
        pluck('items')
      )
      .subscribe((res) => {
        this.data = <Video[]>res;
        this.dataStream$.next(this.data);
      });
  }

  getStatistics(ids: string): Observable<Video> {
    return this.http.get<Video>(
      `https://www.googleapis.com/youtube/v3/videos?id=${ids}&part=snippet,statistics&`
    );
  }

  getItem(id: string): Video | undefined {
    if (!this.data) return;
    return this.data.find((item) => item.id === id);
  }

  filterByDate(isAscending: boolean): void {
    if (isAscending) {
      this.data = this.data!.sort(
        (item1: Video, item2: Video) =>
          new Date(item1.snippet.publishedAt).getTime() -
          new Date(item2.snippet.publishedAt).getTime()
      );
    } else {
      this.data = this.data!.sort(
        (item1: Video, item2: Video) =>
          new Date(item2.snippet.publishedAt).getTime() -
          new Date(item1.snippet.publishedAt).getTime()
      );
    }
  }

  filterByViews(isAscending: boolean): void {
    if (isAscending) {
      this.data = this.data!.sort(
        (item1: Video, item2: Video) =>
          Number(item1.statistics.viewCount) -
          Number(item2.statistics.viewCount)
      );
    } else {
      this.data = this.data!.sort(
        (item1: Video, item2: Video) =>
          Number(item2.statistics.viewCount) -
          Number(item1.statistics.viewCount)
      );
    }
  }

  filterBySearch(value: string): void {
    this.filterSearchValue$.next(value);
  }
}
