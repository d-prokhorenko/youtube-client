import { Pipe, PipeTransform } from '@angular/core';
import { Video } from '../models/search-item.model';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(items: Video[], value: string): Video[] {
    if (value) {
      return items.filter((item) =>
        item.snippet.title.toLowerCase().includes(value.toLowerCase())
      );
    } else {
      return items;
    }
  }
}
