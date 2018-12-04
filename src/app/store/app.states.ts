import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as news from './reducers/news.reducers';
import * as item from './reducers/item.reducers';

export interface AppState {
  news: news.State;
  item: item.State;
}

export const reducers = {
  news: news.reducer,
  item: item.reducer,
};

export const selectNewsState = createFeatureSelector<news.State>('news');
export const selectItemState = createFeatureSelector<item.State>('item');
