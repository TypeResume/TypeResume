import { ResumeLanguage } from './language';

export interface GlobalConfig {
  language: ResumeLanguage;
}

export interface ResumeModel {
  global: GlobalConfig;
}
