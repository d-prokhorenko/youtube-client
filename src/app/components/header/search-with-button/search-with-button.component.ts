import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-with-button',
  templateUrl: './search-with-button.component.html',
  styleUrls: ['./search-with-button.component.scss'],
})
export class SearchWithButtonComponent {
  searchValue: string = '';

  @Output() search = new EventEmitter<string>();

  onSearch(value: string) {
    this.search.emit(value);
    this.searchValue = '';
  }
}
