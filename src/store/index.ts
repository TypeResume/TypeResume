import { createStore } from 'redux';

import { ResumeModel } from '../models/resume';

import reducer from '../reducer';

import initial from './initial';
 
const Store = createStore<ResumeModel>(reducer, initial);

export default Store;
