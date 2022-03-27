import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IsFilterVisibleService {
  static filter: boolean = false;
}
