import { Component, OnInit } from '@angular/core';

import { Response } from './models/search-response.model';
import { DataService } from './services/data.service';
import { FilterService } from './services/filter.service';

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
    this.filterService.stream$.subscribe((isFilter) => {
      this.isFilter = isFilter;
    });

    this.dataService.stream$.subscribe((data) => {
      this.data = data;
    });
  }
}
