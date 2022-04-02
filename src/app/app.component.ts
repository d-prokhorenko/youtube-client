import { Component, OnInit } from '@angular/core';

import { Response } from './youtube/models/search-response.model';
import { DataService } from './youtube/services/data.service';
import { FilterService } from './core/services/filter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  data: Response | null = null;

  isFilter: boolean = false;

  constructor(
    private dataService: DataService,
    private filterService: FilterService
  ) {}

  ngOnInit(): void {
    this.filterService.isFilterStream$.subscribe((isFilter) => {
      this.isFilter = isFilter;
    });

    this.dataService.dataStream$.subscribe((data) => {
      this.data = data;
    });
  }
}
