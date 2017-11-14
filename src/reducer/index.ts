import { combineReducers } from 'redux';

import global from './global';

import { ResumeModel } from '../models/resume';

export default combineReducers<ResumeModel>({
  global
});