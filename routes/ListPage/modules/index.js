import initialState from 'store/globalState/initialState';
import { clone } from 'utils/helpers';

import {
  FETCH_LIST_INIT,
  FETCH_LIST_SUCCESS,
  FETCH_LIST_FAILURE,
} from './types';


export default function listViewReducer(state = initialState.listView, action) {
  switch (action.type) {
    case FETCH_LIST_INIT:
      return {
        ...clone(state),
        isFetched: false,
      };
    case FETCH_LIST_SUCCESS:
      return {
        ...clone(state),
        isFetched: true,
        list: action.payload,
        error: null,
      };
    case FETCH_LIST_FAILURE:
      return {
        ...clone(state),
        error: action.payload,
        isFetched: true,
      };
    default:
      return state;
  }
}
