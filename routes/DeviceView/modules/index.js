import initialState from 'store/globalState/initialState';
import { clone } from 'utils/helpers';
import {
  LOAD_DEVICE_ONE_INIT,
  LOAD_DEVICE_ONE_SUCESS,
  LOAD_DEVICE_ONE_FAILURE,
} from './types';

export default function deviceViewReducer(state = initialState.deviceView, action) {
  switch (action.type) {
    case LOAD_DEVICE_ONE_INIT:
      return {
        ...clone(state),
        loaded: false,
        error: {},
      };
    case LOAD_DEVICE_ONE_SUCESS:
      return {
        ...clone(state),
        loaded: true,
        device: action.payload,
        error: {},
      };
    case LOAD_DEVICE_ONE_FAILURE:
      return {
        ...clone(state),
        error: { message: action.payload },
        loaded: true,
      };
    default:
      return state;
  }
}
