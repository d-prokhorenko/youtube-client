import { Component } from '@angular/core';

import { response } from './response.mock';
import { Response } from './interfaces/response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data: any;

  filter: boolean = false;

  searchItems(value: string) {
    console.log(value);
    this.data = response;
  }
}
