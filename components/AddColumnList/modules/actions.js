/* eslint-disable no-unused-vars */
import apiFetch from 'utils/apiFetch';
import { BASE_END_POINT } from 'constants/apiConf';
import {
  FEACH_AVAILABLE_FIELD_INIT,
  FEACH_AVAILABLE_FIELD_SUCESS,
  FEACH_AVAILABLE_FIELD_FAILURE,
  ADD_SELECTED_COLUMN_LIST,
} from './types';

export function fetchAvailableFieldInit() {
  return {
    type: FEACH_AVAILABLE_FIELD_INIT,
  };
}

export function fetchAvailableFieldSuccess(data, tb) {
  return {
    type: FEACH_AVAILABLE_FIELD_SUCESS,
    payload: { data, name: tb },
  };
}

export function fetchAvailableFieldFailure(error) {
  return {
    type: FEACH_AVAILABLE_FIELD_FAILURE,
    payload: error,
  };
}

export function fetchAvailableField(tb) {
  return (dispatch) => {
    dispatch(fetchAvailableFieldInit());
    const params = {
      output_type: 'json',
      query: `SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'view_${tb}_v1' ORDER BY ORDINAL_POSITION`, // some qurey here
    };
    apiFetch('GET', { endPoint: BASE_END_POINT }, params)
      .then((data) => {
        dispatch(fetchAvailableFieldSuccess(data || [], tb));
      })
      .catch((err) => {
        dispatch(fetchAvailableFieldFailure(err));
      });
  };
}

export function addColumnList(data, tb) {
  return (dispatch) => {
    // TODO need to post data to server
    dispatch({
      type: ADD_SELECTED_COLUMN_LIST,
      payload: { data, name: tb },
    });
  };
}
