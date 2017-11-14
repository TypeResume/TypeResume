import { ResumeModel } from '../models/resume';

import { Language } from '../constants/language';

const initial: ResumeModel = {
  global: {
    language: {
      language: Language.Chinese
    }
  }
};

export default initial;
