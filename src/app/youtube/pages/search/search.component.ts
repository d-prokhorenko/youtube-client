import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { YoutubeState } from 'src/app/redux/state.model';
import { Video } from '../../models/search-item.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  data: Video[] | null = null;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private store: Store<YoutubeState>
  ) {}

  ngOnInit(): void {
    this.dataService.dataStream$.subscribe((data) => {
      this.data = data;
    });

    this.route.queryParams.subscribe(({ value }) =>
      this.dataService.getData(value)
    );

    this.store.select('youtube').subscribe((d) => console.log(d));
  }
}
