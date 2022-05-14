import { CustomItem } from 'src/app/youtube/models/custom-item.model';

interface Action {
  type: string;
  payload?: any;
}

export class AddCustomVideo implements Action {
  readonly type = 'ADD_VIDEO';

  constructor(public payload: CustomItem) {}
}
