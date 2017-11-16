import { createAction } from 'redux-actions';

import { ProfileChanged, Profile } from '../models/profile';

import {
  PROFILE_CHANGED
} from '../constants/actions';

export const changeProfile = createAction<ProfileChanged, Profile>(
  PROFILE_CHANGED,
  (profile: Profile) => ({ profile })
);
