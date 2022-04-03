import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../../models/search-item.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-item-detailed',
  templateUrl: './item-detailed.component.html',
  styleUrls: ['./item-detailed.component.scss'],
})
export class ItemDetailedComponent implements OnInit {
  item: Item | undefined = undefined;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.dataService.getItem(id).subscribe((item) => {
        this.item = item;
      });
    });
  }
}
