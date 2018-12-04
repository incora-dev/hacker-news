import { Action } from '@ngrx/store';

export enum NewsActionTypes {
  NEWS_GET_ALL = '[News] News Get All',
  NEWS_GET_ALL_SUCCESS = '[News] News Get All Success',
  NEWS_GET_ALL_FAILURE = '[News] News Get All Failure',
}

export class NewsGetAll implements Action {
  readonly type = NewsActionTypes.NEWS_GET_ALL;
  constructor() {}
}

export class NewsGetAllSuccess implements Action {
  readonly type = NewsActionTypes.NEWS_GET_ALL_SUCCESS;
  constructor(public payload: Array<number>) {}
}

export class NewsGetAllFailure implements Action {
  readonly type = NewsActionTypes.NEWS_GET_ALL_FAILURE;
  constructor(public payload: string) {}
}

export type All =
  | NewsGetAll
  | NewsGetAllSuccess
  | NewsGetAllFailure;
