import { ResumeLanguage } from './language';
import { Profile } from './profile';

export interface GlobalConfig {
  language: ResumeLanguage;
}

export interface ResumeModel {
  global: GlobalConfig;
  profile: Profile;
}
