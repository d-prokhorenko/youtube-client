import { Component, DoCheck, Input } from '@angular/core';
import { Item } from 'src/app/models/search-item.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements DoCheck {
  filterSearchValue: string = '';

  constructor(private dataService: DataService) {}

  @Input() items: Item[] = [];

  ngDoCheck(): void {
    this.filterSearchValue = this.dataService.filterSearchValue;
  }
}
