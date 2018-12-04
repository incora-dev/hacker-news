import { ItemActionTypes, All } from '../actions/item.actions';
import { Item } from '../models/item.models';

export interface State {
  items: Item[];
  loading: boolean;
  loaded: boolean;
  error: string;
}

export const initialState: State = {
  items: [],
  loading: true,
  loaded: false,
  error: null,
};

export function reducer(state = initialState, action: All): State {
  switch (action.type) {
    case ItemActionTypes.ITEM_GET_ONE: {
      return {
        ...state,
        items: [],
        loading: true,
        loaded: false,
        error: null,
      };
    }
    case ItemActionTypes.ITEM_GET_ONE_SUCCESS: {
      return {
        ...state,
        items: [...state.items, action.payload as Item],
        loading: false,
        loaded: true,
        error: null,
      };
    }
    case ItemActionTypes.ITEM_GET_ONE_FAILURE: {
      return {
        ...state,
        items: [],
        loading: false,
        loaded: true,
        error: null,
      };
    }
    case ItemActionTypes.ITEM_CLEAR_ALL: {
      return {
        ...state,
        items: [],
        loading: true,
        loaded: false,
        error: null,
      };
    }
    default: {
      return state;
    }
  }
}
