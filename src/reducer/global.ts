import { combineReducers } from 'redux';

import { GlobalConfig } from '../models/resume';

import language from './language';

export default combineReducers<GlobalConfig>({
  language
});
