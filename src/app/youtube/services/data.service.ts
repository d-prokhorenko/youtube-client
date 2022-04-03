import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Item } from '../models/search-item.model';
import { Response } from '../models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  data: Response | null = null;

  dataStream$: Subject<Response> = new Subject<Response>();

  filterSearchValue$: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient) {}

  getData(value: string): void {
    this.http
      .get<Response>(
        `https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&maxResults=10&q=${value}&`
      )
      .subscribe((res) => {
        this.data = res;
        this.dataStream$.next(this.data);
      });
  }

  getItem(id: string): Observable<Item> {
    return this.http
      .get<Response>(
        `https://www.googleapis.com/youtube/v3/videos?id=${id}&part=snippet,statistics&`
      )
      .pipe(map((item) => item.items[0]));
  }

  filterByDate(isAscending: boolean): void {
    if (isAscending) {
      this.data!.items = this.data!.items.sort(
        (item1: Item, item2: Item) =>
          new Date(item1.snippet.publishedAt).getTime() -
          new Date(item2.snippet.publishedAt).getTime()
      );
    } else {
      this.data!.items = this.data!.items.sort(
        (item1: Item, item2: Item) =>
          new Date(item2.snippet.publishedAt).getTime() -
          new Date(item1.snippet.publishedAt).getTime()
      );
    }
  }

  filterByViews(isAscending: boolean): void {
    if (isAscending) {
      this.data!.items = this.data!.items.sort(
        (item1: Item, item2: Item) =>
          Number(item1.statistics.viewCount) -
          Number(item2.statistics.viewCount)
      );
    } else {
      this.data!.items = this.data!.items.sort(
        (item1: Item, item2: Item) =>
          Number(item2.statistics.viewCount) -
          Number(item1.statistics.viewCount)
      );
    }
  }

  filterBySearch(value: string): void {
    this.filterSearchValue$.next(value);
  }
}
