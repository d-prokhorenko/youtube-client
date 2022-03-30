import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterService {
  isFilterStream$: Subject<boolean> = new Subject<boolean>();
}
