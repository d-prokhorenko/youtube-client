import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  isDateAscedning: boolean | null = null;

  isViewsAscedning: boolean | null = null;

  @Output() dateFilter = new EventEmitter<boolean>();

  @Output() viewsFilter = new EventEmitter<boolean>();

  onDate(): void {
    this.isDateAscedning = !this.isDateAscedning;
    this.isViewsAscedning = null;
    this.dateFilter.emit(this.isDateAscedning);
  }

  onViews(): void {
    this.isViewsAscedning = !this.isViewsAscedning;
    this.isDateAscedning = null;
    this.viewsFilter.emit(this.isViewsAscedning);
  }
}
