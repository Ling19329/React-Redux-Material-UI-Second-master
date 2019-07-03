import apiFetch from 'utils/apiFetch';
import { sessionService } from 'redux-react-session';
import {
  loadingAction,
} from 'store/globalState/global';

import {
  FETCH_LOGIN_INIT,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAILURE,
} from './types';

export function fetchLoginInit() {
  return {
    type: FETCH_LOGIN_INIT,
  };
}

export function fetchLoginSuccess() {
  return {
    type: FETCH_LOGIN_SUCCESS,
  };
}

export function fetchLoginFailure(error) {
  return {
    type: FETCH_LOGIN_FAILURE,
    payload: error,
  };
}

export default function fetchloginAction(event, { email }) {
  event.preventDefault();

  /* const loginForm = {
    email,
    password,
  }; */

  return (dispatch) => {
    dispatch(loadingAction(true));
    dispatch(fetchLoginInit());

    return new Promise((resolve) => {
      sessionService.saveSession({ token: '123456789' })
        .then(() => {
          sessionService.saveUser({
            email,
          }).then(() => {
            dispatch(fetchLoginSuccess());
            dispatch(loadingAction(false));
            resolve(true);
          });
        });
    });
  };
}

/**
 * @name recoverPassword
 * Function to recover password
 *
 * @param {String}  email
 *
 * @returns {Promise}
 */
export function recoverPassword({ email, lang }) {
  const url = 'request_password';

  return apiFetch('GET', { endPoint: url }, { email, lang });
}
