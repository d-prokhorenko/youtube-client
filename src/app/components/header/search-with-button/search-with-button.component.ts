import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search-with-button',
  templateUrl: './search-with-button.component.html',
  styleUrls: ['./search-with-button.component.scss'],
})
export class SearchWithButtonComponent {
  searchValue: string = '';

  constructor(private dataService: DataService) {}

  onSearch(value: string) {
    this.dataService.getData(value);
    this.searchValue = '';
  }
}
