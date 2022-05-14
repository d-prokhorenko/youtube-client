import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { fromEvent } from 'rxjs';
import {
  map,
  debounceTime,
  distinctUntilChanged,
  filter,
} from 'rxjs/operators';
import { AuthService } from 'src/app/auth/services/auth.service';
import { LoadVideos } from 'src/app/redux/actions/search.action';
import { YoutubeState } from 'src/app/redux/state.model';

@Component({
  selector: 'app-search-with-button',
  templateUrl: './search-with-button.component.html',
  styleUrls: ['./search-with-button.component.scss'],
})
export class SearchWithButtonComponent implements OnInit {
  @ViewChild('searchInput', { static: true }) searchInput: ElementRef | null =
    null;

  constructor(
    private router: Router,
    private auth: AuthService,
    private store: Store<YoutubeState>
  ) {}

  ngOnInit(): void {
    fromEvent<InputEvent>(this.searchInput?.nativeElement, 'input')
      .pipe(
        map((e: InputEvent) => (e.target as HTMLInputElement).value.trim()),
        debounceTime(1000),
        distinctUntilChanged(),
        filter((v) => v.length > 2 && this.auth.isAuthenticated())
      )
      .subscribe((value) => {
        this.store.dispatch(new LoadVideos(value));
        this.router.navigate(['search']);
      });
  }
}
