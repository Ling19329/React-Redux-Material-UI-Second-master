import initialState from 'store/globalState/initialState';
import { clone, transformColumListWithLabel } from 'utils/helpers';
import {
  FEACH_AVAILABLE_FIELD_INIT,
  FEACH_AVAILABLE_FIELD_SUCESS,
  FEACH_AVAILABLE_FIELD_FAILURE,
  ADD_SELECTED_COLUMN_LIST,
} from './types';

export default function fieldListReducer(state = initialState.fieldList, action) {
  switch (action.type) {
    case FEACH_AVAILABLE_FIELD_INIT:
      return {
        ...clone(state),
        isFetched: false,
      };
    case FEACH_AVAILABLE_FIELD_SUCESS: {
      const newState = clone(state);
      newState.fields[action.payload.name] = transformColumListWithLabel(action.payload.data);
      return {
        ...newState,
        isFetched: true,
        error: null,
      };
    }
    case FEACH_AVAILABLE_FIELD_FAILURE:
      return {
        ...clone(state),
        error: action.payload,
        isFetched: true,
      };
    case ADD_SELECTED_COLUMN_LIST: {
      const newState = clone(state);
      const { columnLists } = newState;
      const columnList = columnLists[action.payload.name] || [];
      columnList.push(action.payload.data);
      columnLists[action.payload.name] = columnList;
      return {
        ...newState,
        columnLists,
      };
    }
    default:
      return state;
  }
}
