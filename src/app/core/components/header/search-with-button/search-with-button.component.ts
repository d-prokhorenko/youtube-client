import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';

import { DataService } from 'src/app/youtube/services/data.service';

@Component({
  selector: 'app-search-with-button',
  templateUrl: './search-with-button.component.html',
  styleUrls: ['./search-with-button.component.scss'],
})
export class SearchWithButtonComponent implements OnInit {
  @ViewChild('searchInput', { static: true }) searchInput: ElementRef | null =
    null;

  constructor(
    private dataService: DataService,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    fromEvent<InputEvent>(this.searchInput?.nativeElement, 'input')
      .pipe(
        map((e: InputEvent) => (e.target as HTMLInputElement).value),
        debounceTime(1000),
        distinctUntilChanged()
      )
      .subscribe((value) => {
        if (this.auth.isAuthenticated() && value.length > 2) {
          this.dataService.getData(value);
          this.router.navigate(['search']);
        }
      });
  }
}
