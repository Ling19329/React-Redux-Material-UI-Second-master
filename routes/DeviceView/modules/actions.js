/* eslint-disable no-unused-vars */
import apiFetch from 'utils/apiFetch';
import { BASE_END_POINT } from 'constants/apiConf';
import { deviceOneQuery } from 'constants/queries';

import {
  LOAD_DEVICE_ONE_INIT,
  LOAD_DEVICE_ONE_SUCESS,
  LOAD_DEVICE_ONE_FAILURE,
} from './types';

export function loadDevice(id) {
  return (dispatch) => {
    dispatch({
      type: LOAD_DEVICE_ONE_INIT,
    });

    const params = {
      output_type: 'json',
      query: deviceOneQuery(id),
    };

    apiFetch('GET', { endPoint: BASE_END_POINT }, params)
      .then((data) => {
        dispatch({
          type: LOAD_DEVICE_ONE_SUCESS,
          payload: data || {},
        });
      })
      .catch((err) => {
        dispatch({
          type: LOAD_DEVICE_ONE_FAILURE,
          payload: err,
        });
      });
  };
}
