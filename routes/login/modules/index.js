import initialState from 'store/globalState/initialState';

import {
  FETCH_LOGIN_INIT,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAILURE,
} from './types';

export default function loginReducer(state = initialState.login, action) {
  switch (action.type) {
    case FETCH_LOGIN_INIT:
    case FETCH_LOGIN_SUCCESS:
      return {
        error: '',
      };
    case FETCH_LOGIN_FAILURE:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
}
