import initialState from 'store/globalState/initialState';
import { clone } from 'utils/helpers';

import {
  FEACH_RELATED_DATA_INIT,
  FEACH_RELATED_DATA_SUCESS,
  FEACH_RELATED_DATA_FAILURE,
} from './types';

const fetchInit = (state, instance) => {
  const newState = clone(state);
  newState.loaded[instance] = false;
  return newState;
};

const fetchSucess = (state, payload) => {
  const newState = clone(state);
  newState.loaded[payload.instance] = true;
  newState.data[payload.instance] = payload.data;
  return newState;
};

const fetchFailure = (state, payload) => {
  const newState = clone(state);
  newState.error[payload.instance] = payload.err;
  newState.loaded[payload.instance] = true;
  return newState;
};


export default function relatedDataReducer(state = initialState.relatedData, action) {
  switch (action.type) {
    case FEACH_RELATED_DATA_INIT:
      return fetchInit(state, action.payload.instance);
    case FEACH_RELATED_DATA_SUCESS:
      return fetchSucess(state, action.payload);
    case FEACH_RELATED_DATA_FAILURE:
      return fetchFailure(state, action.payload);
    default:
      return state;
  }
}
