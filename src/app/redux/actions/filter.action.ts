interface Action {
  type: string;
  payload?: any;
}

export class FilterByDate implements Action {
  readonly type = 'FILTER_BY_DATE';

  constructor(public payload: boolean) {}
}

export class FilterByViews implements Action {
  readonly type = 'FILTER_BY_VIEWS';

  constructor(public payload: boolean) {}
}
