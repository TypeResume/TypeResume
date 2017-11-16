import { handleActions, Action } from 'redux-actions';

import { ProfileChanged, Profile } from '../models/profile';

import { PROFILE_CHANGED } from '../constants/actions';

const initialState: Profile = {
  username: '',
  avatar: '',
  repos: 0,
  stars: 0,
  followers: 0,
  orgs: 0,
  website: ''
};

export default handleActions<Profile, ProfileChanged>({
  [PROFILE_CHANGED]: (state: Profile, action: Action<ProfileChanged>) => {
    return Object.assign({}, state, action.payload);
  }
},                                                    initialState);
