import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/core/services/filter.service';
import { DataService } from 'src/app/youtube/services/data.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  isFilter: boolean = false;

  isDateAscedning: boolean | null = null;

  isViewsAscedning: boolean | null = null;

  constructor(
    private dataService: DataService,
    private filterService: FilterService
  ) {}

  ngOnInit(): void {
    this.filterService.isFilterStream$.subscribe((isFilter) => {
      this.isFilter = isFilter;
    });
  }

  onDate(): void {
    if (!this.checkData()) return;
    this.isDateAscedning = !this.isDateAscedning;
    this.dataService.filterByDate(this.isDateAscedning);
    this.isViewsAscedning = null;
  }

  onViews(): void {
    if (!this.checkData()) return;
    this.isViewsAscedning = !this.isViewsAscedning;
    this.dataService.filterByViews(this.isViewsAscedning);
    this.isDateAscedning = null;
  }

  onSearch(value: string): void {
    if (!this.checkData()) return;
    this.dataService.filterBySearch(value);
  }

  checkData(): boolean {
    return !!this.dataService.data;
  }
}
