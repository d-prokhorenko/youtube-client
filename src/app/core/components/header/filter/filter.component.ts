import { Component } from '@angular/core';
import { DataService } from 'src/app/youtube/services/data.service';

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
