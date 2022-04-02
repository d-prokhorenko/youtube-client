import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '../../models/search-response.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  data: Response | null = null;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.dataService.dataStream$.subscribe((data) => {
      this.data = data;
    });

    this.route.queryParams.subscribe(({ value }) =>
      this.dataService.getData(value)
    );
  }
}
