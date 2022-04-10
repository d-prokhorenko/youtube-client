import { Action } from '@ngrx/store';
import { CustomItem } from 'src/app/youtube/models/custom-item.model';

export class AddCustomVideo implements Action {
  readonly type = 'ADD_VIDEO';

  constructor(public payload: CustomItem) {}
}
