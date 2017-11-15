import { handleActions, Action } from 'redux-actions';

import { UsernameChanged, Profile } from '../models/profile';

import { LANGUAGE_CHANGED } from '../constants/actions';

const initialState: UsernameChanged = {
  username: ''
};

export default handleActions<Profile, UsernameChanged>({
  [LANGUAGE_CHANGED]: (state: Profile, action: Action<UsernameChanged>) => {
    return action.payload && {
      username: action.payload && action.payload.username
    } || state;
  }
},                                                     initialState);
