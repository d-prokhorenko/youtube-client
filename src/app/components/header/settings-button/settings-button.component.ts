import { Component } from '@angular/core';
import { IsFilterVisibleService } from 'src/app/services/is-filter-visible.service';

@Component({
  selector: 'app-settings-button',
  templateUrl: './settings-button.component.html',
  styleUrls: ['./settings-button.component.scss'],
})
export class SettingsButtonComponent {
  onSettings(): void {
    IsFilterVisibleService.filter = !IsFilterVisibleService.filter;
  }
}
