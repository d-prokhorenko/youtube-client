import { Component, Input } from '@angular/core';
import { CustomItem } from '../../models/custom-item.model';

@Component({
  selector: 'app-custom-item',
  templateUrl: './custom-item.component.html',
  styleUrls: ['./custom-item.component.scss'],
})
export class CustomItemComponent {
  @Input() item: CustomItem | null = null;
}
