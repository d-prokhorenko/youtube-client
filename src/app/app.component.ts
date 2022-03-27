import { Component, DoCheck } from '@angular/core';

import { response } from './response.mock';
import { Response } from './interfaces/response';
import { Video } from './interfaces/response';
import { IsFilterVisibleService } from './services/is-filter-visible.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements DoCheck {
  data: any;

  filter: boolean = false;

  searchValue: string = '';

  ngDoCheck() {
    this.filter = IsFilterVisibleService.filter;
  }

  searchItems(value: string) {
    console.log(value);
    this.data = response;
  }

  filterByDate(isAscending: boolean) {
    if (isAscending) {
      this.data.items = this.data.items.sort(
        (item1: Video, item2: Video) =>
          new Date(item1.snippet.publishedAt).getTime() -
          new Date(item2.snippet.publishedAt).getTime()
      );
    } else {
      this.data.items = this.data.items.sort(
        (item1: Video, item2: Video) =>
          new Date(item2.snippet.publishedAt).getTime() -
          new Date(item1.snippet.publishedAt).getTime()
      );
    }
  }

  filterByViews(isAscending: boolean) {
    if (isAscending) {
      this.data.items = this.data.items.sort(
        (item1: Video, item2: Video) =>
          Number(item1.statistics.viewCount) -
          Number(item2.statistics.viewCount)
      );
    } else {
      this.data.items = this.data.items.sort(
        (item1: Video, item2: Video) =>
          Number(item2.statistics.viewCount) -
          Number(item1.statistics.viewCount)
      );
    }
  }

  filterBySearch(value: string): void {
    this.searchValue = value;
  }
}
