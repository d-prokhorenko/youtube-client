import { Component } from '@angular/core';
import { FilterService } from 'src/app/core/services/filter.service';

@Component({
  selector: 'app-settings-button',
  templateUrl: './settings-button.component.html',
  styleUrls: ['./settings-button.component.scss'],
})
export class SettingsButtonComponent {
  isFilter: boolean = false;

  constructor(private filterService: FilterService) {}

  onSettings(): void {
    this.isFilter = !this.isFilter;
    this.filterService.isFilterStream$.next(this.isFilter);
  }
}
