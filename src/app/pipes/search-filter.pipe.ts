import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../models/search-item.model';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(items: Item[], value: string): Item[] {
    if (value) {
      return items.filter((item) =>
        item.snippet.title.toLowerCase().includes(value.toLowerCase())
      );
    } else {
      return items;
    }
  }
}
