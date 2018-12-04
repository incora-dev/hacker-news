import { NewsActionTypes, All } from '../actions/news.actions';

export interface State {
  stories: Array<number>;
  loading: boolean;
  loaded: boolean;
  error: string;
}

export const initialState: State = {
  stories: null,
  loading: true,
  loaded: false,
  error: null,
};

export function reducer(state = initialState, action: All): State {
  switch (action.type) {
    case NewsActionTypes.NEWS_GET_ALL: {
      return {
        ...state,
        stories: null,
        loading: true,
        loaded: false,
        error: null,
      };
    }
    case NewsActionTypes.NEWS_GET_ALL_SUCCESS: {
      return {
        ...state,
        stories: action.payload,
        loading: false,
        loaded: true,
        error: null,
      };
    }
    case NewsActionTypes.NEWS_GET_ALL_FAILURE: {
      return {
        ...state,
        stories: null,
        loading: false,
        loaded: true,
        error: null,
      };
    }
    default: {
      return state;
    }
  }
}
