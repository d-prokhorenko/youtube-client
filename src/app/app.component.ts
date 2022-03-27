import { Component, DoCheck } from '@angular/core';

import { response } from './response.mock';
import { Response } from './interfaces/response';
import { IsFilterVisibleService } from './services/is-filter-visible.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements DoCheck {
  data: any;

  filter: boolean = false;

  ngDoCheck() {
    this.filter = IsFilterVisibleService.filter;
  }

  searchItems(value: string) {
    console.log(value);
    this.data = response;
  }
}
