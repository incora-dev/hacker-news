import { Action } from '@ngrx/store';
import { Item } from '../models/item.models';

export enum ItemActionTypes {
  ITEM_GET_ONE = '[Item] Item Get One',
  ITEM_GET_ONE_SUCCESS = '[Item] Item Get One Success',
  ITEM_GET_ONE_FAILURE = '[Item] Item Get One Failure',
  ITEM_CLEAR_ALL = '[Item] Item Clear All',
}

export class ItemGetOne implements Action {
  readonly type = ItemActionTypes.ITEM_GET_ONE;
  constructor(public payload: number | string) {}
}

export class ItemGetOneSuccess implements Action {
  readonly type = ItemActionTypes.ITEM_GET_ONE_SUCCESS;
  constructor(public payload: Item) {}
}

export class ItemGetOneFailure implements Action {
  readonly type = ItemActionTypes.ITEM_GET_ONE_FAILURE;
  constructor(public payload: string) {}
}

export class ItemClearAll implements Action {
  readonly type = ItemActionTypes.ITEM_CLEAR_ALL;
  constructor() {}
}

export type All =
  | ItemGetOne
  | ItemGetOneSuccess
  | ItemGetOneFailure
  | ItemClearAll;
