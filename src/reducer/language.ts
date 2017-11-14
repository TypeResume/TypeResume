import { handleActions, Action } from 'redux-actions';

import { LanguageChanged, ResumeLanguage } from '../models/language';

import { Language } from '../constants/language';

import { LANGUAGE_CHANGED } from '../constants/actions';

const initialState: ResumeLanguage = {
  language: Language.Chinese
};

export default handleActions<ResumeLanguage, LanguageChanged>({
  [LANGUAGE_CHANGED]: (state: ResumeLanguage, action: Action<LanguageChanged>) => {
    return action.payload && {
      language: action.payload && action.payload.language
    } || state;
  }
},                                                            initialState);
