import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  isDateAscedning: boolean | null = null;

  isViewsAscedning: boolean | null = null;

  constructor(private dataService: DataService) {}

  onDate(): void {
    this.isDateAscedning = !this.isDateAscedning;
    this.dataService.filterByDate(this.isDateAscedning);
    this.isViewsAscedning = null;
  }

  onViews(): void {
    this.isViewsAscedning = !this.isViewsAscedning;
    this.dataService.filterByViews(this.isViewsAscedning);
    this.isDateAscedning = null;
  }

  onSearch(value: string): void {
    this.dataService.filterBySearch(value);
  }
}
