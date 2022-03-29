import { Injectable } from '@angular/core';
import { Item } from '../models/search-item.model';
import { Response } from '../models/search-response.model';
import { response } from '../response.mock';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  data: Response | null = null;

  filterSearchValue: string = '';

  getData(value: string): Response {
    console.log('Search value:', value);
    this.data = response;
    return this.data;
  }

  filterByDate(isAscending: boolean) {
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

  filterByViews(isAscending: boolean) {
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
    this.filterSearchValue = value;
  }
}
