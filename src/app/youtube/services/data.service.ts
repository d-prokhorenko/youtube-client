import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from '../models/search-item.model';
import { Response } from '../models/search-response.model';
import { response } from '../../response.mock';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  data: Response | null = null;

  dataStream$: Subject<Response> = new Subject<Response>();

  filterSearchValue$: Subject<string> = new Subject<string>();

  getData(value: string): void {
    console.log('Search value:', value);
    this.data = response;
    this.dataStream$.next(this.data);
  }

  getItem(id: string): Item | undefined {
    if (!this.data) return;
    return this.data.items.find((item) => item.id === id);
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
