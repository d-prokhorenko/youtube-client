import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-with-button',
  templateUrl: './search-with-button.component.html',
  styleUrls: ['./search-with-button.component.scss'],
})
export class SearchWithButtonComponent {
  searchValue: string = '';

  constructor(private router: Router) {}

  onSearch(value: string) {
    this.router.navigate(['search'], {
      queryParams: {
        value,
      },
    });
  }
}
