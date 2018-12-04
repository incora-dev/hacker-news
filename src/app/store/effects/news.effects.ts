import { Injectable, forwardRef, NgModule } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, catchError, throwIfEmpty, switchMap } from 'rxjs/operators';
import { Observable, Subscription, of } from 'rxjs';
import { NewsService } from '../../services';
import { Item } from '../models/item.models';
import {
  NewsGetAll,
  NewsGetAllSuccess,
  NewsGetAllFailure,
  NewsActionTypes,
} from '../actions/news.actions';

@NgModule({ providers: [forwardRef(() => NewsEffects)] })
@Injectable()
export class NewsEffects {
  constructor(
    private _actions: Actions,
    private _newsService: NewsService,
  ) {}

  @Effect()
  NewsGetAll = this._actions
    .pipe(
      ofType(NewsActionTypes.NEWS_GET_ALL),
      switchMap((action: NewsGetAll) =>
        this._newsService
          .getAll()
          .pipe(
            map(items => new NewsGetAllSuccess(items)),
            catchError(error => of(new NewsGetAllFailure(error)))
          ))
    );
}
