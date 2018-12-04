import { Injectable, forwardRef, NgModule } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';
import { mergeMap } from 'rxjs/internal/operators/mergeMap';
import { ItemService } from '../../services';
import { Item } from '../models/item.models';
import {
  ItemGetOne,
  ItemGetOneSuccess,
  ItemGetOneFailure,
  ItemActionTypes,
} from '../actions/item.actions';

@NgModule({ providers: [forwardRef(() => ItemEffects)] })
@Injectable()
export class ItemEffects {
  constructor(
    private _actions: Actions,
    private _itemService: ItemService,
  ) {}

  @Effect()
  ItemGetOne = this._actions
    .pipe(
      ofType(ItemActionTypes.ITEM_GET_ONE),
      map((action: ItemGetOne) => action.payload),
      mergeMap((payload) =>
        this._itemService
          .getOne(payload)
          .pipe(
            map(item => new ItemGetOneSuccess(item)),
            catchError(error => of(new ItemGetOneFailure(error)))
          ))
    );
}
