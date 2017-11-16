import { ResumeModel } from '../models/resume';

import { Language } from '../constants/language';

const initial: ResumeModel = {
  global: {
    language: {
      language: Language.Chinese
    }
  },
  profile: {
    username: 'AngryPowman',
    avatar: 'https://avatars2.githubusercontent.com/u/1910783?s=460&v=4',
    repos: 42,
    stars: 89,
    followers: 65,
    orgs: 60,
    website: ''
  }
};

export default initial;
