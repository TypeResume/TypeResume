import { createAction } from 'redux-actions';

import { LanguageChanged } from '../models/language';
import { Language } from '../constants/language';

import {
  LANGUAGE_CHANGED
} from '../constants/actions';

export const changeLanguage = createAction<LanguageChanged, Language>(
  LANGUAGE_CHANGED,
  (language: Language) => ({ language })
);
