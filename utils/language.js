export const EN_LANGUAGE = 'en';

// can be add more languages
export const DEFAULT_LANGUAGE = EN_LANGUAGE;
export const ALLOWED_LANGUAGES = [
  { code: EN_LANGUAGE, label: 'English' },
];

/**
 * @name getBrowserLanguage
 * Function to get user language
 *
 * @returns {String} browser lang
 */
export function getBrowserLanguage() {
  let lang = '';

  if (navigator.languages && navigator.languages.length) {
    // latest versions of Chrome and Firefox set this correctly
    lang = navigator.languages[0];
  } else if (navigator.userLanguage) {
    // IE only
    lang = navigator.userLanguage;
  } else {
    // latest versions of Chrome, Firefox, and Safari set this correctly
    lang = navigator.language;
  }

  lang = (typeof lang !== 'undefined') ? lang.split('-')[0].toLowerCase() : '';

  return (ALLOWED_LANGUAGES.includes(lang)) ? lang : DEFAULT_LANGUAGE;
}
