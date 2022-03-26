import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  items: number[] = [];

  filter: boolean = false;

  searchItems(value: string) {
    this.items.push(1);
    console.log(value);
  }
}
