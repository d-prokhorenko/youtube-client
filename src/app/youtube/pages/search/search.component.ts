import { Component, Input } from '@angular/core';
import { Item } from 'src/app/youtube/models/search-item.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Input() items: Item[] = [];
}
