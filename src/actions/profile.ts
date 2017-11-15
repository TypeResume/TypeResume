import { createAction } from 'redux-actions';

import { UsernameChanged } from '../models/profile';

import {
  USERNAME_CHANGED
} from '../constants/actions';

export const changeLanguage = createAction<UsernameChanged, string>(
  USERNAME_CHANGED,
  (username: string) => ({ username })
);
