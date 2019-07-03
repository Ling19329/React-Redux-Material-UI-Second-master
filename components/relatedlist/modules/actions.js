import apiFetch from 'utils/apiFetch';
import { BASE_END_POINT } from 'constants/apiConf';

import {
  FEACH_RELATED_DATA_INIT,
  FEACH_RELATED_DATA_SUCESS,
  FEACH_RELATED_DATA_FAILURE,
} from './types';

export function fetchRelatedData(query, instance) {
  return (dispatch) => {
    dispatch({
      type: FEACH_RELATED_DATA_INIT,
      payload: { instance },
    });

    const params = {
      output_type: 'json',
      query,
    };

    apiFetch('GET', { endPoint: BASE_END_POINT }, params)
      .then((res) => {
        let data = res;
        if ((res.constructor === {}.constructor)) {
          data = [res];
        }
        dispatch({
          type: FEACH_RELATED_DATA_SUCESS,
          payload: {
            data,
            instance,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: FEACH_RELATED_DATA_FAILURE,
          payload: {
            err,
            instance,
          },
        });
      });
  };
}
