import { Component } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-settings-button',
  templateUrl: './settings-button.component.html',
  styleUrls: ['./settings-button.component.scss'],
})
export class SettingsButtonComponent {
  constructor(private filterService: FilterService) {}

  onSettings(): void {
    this.filterService.isFilter = !this.filterService.isFilter;
  }
}
