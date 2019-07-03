import i18n from 'i18n';
import { getBrowserLanguage } from 'utils/language';

import {
  SET_PLATFORM_LANGUAGE,
} from './types';

const USER_LANG = getBrowserLanguage();

const INITIAL_LANG_CONF = {
  language: USER_LANG,
  literals: i18n[USER_LANG],
};

export default function i18nReducer(state = INITIAL_LANG_CONF, { type, payload: lang }) {
  switch (type) {
    case SET_PLATFORM_LANGUAGE:
      return {
        language: lang,
        literals: i18n[lang],
      };
    default:
      return state;
  }
}
