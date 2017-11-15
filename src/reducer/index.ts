import { combineReducers } from 'redux';

import global from './global';
import profile from './profile';

import { ResumeModel } from '../models/resume';

export default combineReducers<ResumeModel>({
  global,
  profile
});