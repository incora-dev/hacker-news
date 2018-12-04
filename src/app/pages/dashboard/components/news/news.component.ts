import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, selectNewsState, selectItemState } from '../../../../store/app.states';
import { NewsGetAll } from '../../../../store/actions/news.actions';
import { State as NewsState } from '../../../../store/reducers/news.reducers';
import { State as ItemState } from '../../../../store/reducers/item.reducers';
import { ItemGetOne } from '../../../../store/actions/item.actions';

const ITEMS_PER_PAGE = 30;

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  public newsState: NewsState;
  public itemState: ItemState;
  public pageCount = 1;

  constructor(
    private _store: Store<AppState>,
  ) { }

  ngOnInit() {
    this._store.dispatch(new NewsGetAll());
    this._store.select(selectNewsState).subscribe(
      (state) => {
        this.newsState = state;
        this.pageCount = state.stories ? Math.ceil(state.stories.length / ITEMS_PER_PAGE) : 1;
        this.loadStoriesByPage();
      },
      (error) => {
        this.newsState = error;
      },
    );

    this._store.select(selectItemState).subscribe(
      (state) => {
        this.itemState = state;
      },
      (error) => {
        this.newsState = error;
      },
    );
  }

  public loadStoriesByPage(page: number = 1) {
    const { stories } = this.newsState || {} as NewsState;
    if (stories && stories.length) {
      stories
        .slice(ITEMS_PER_PAGE * (page - 1), ITEMS_PER_PAGE * page - 1)
        .forEach((story) => {
          this._store.dispatch(new ItemGetOne(story));
        });
    }
  }

}
