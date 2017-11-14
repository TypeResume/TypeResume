import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import Flag from '../presentational/Flag';

import { ResumeLanguage } from '../../models/language';
import { ResumeModel } from '../../models/resume';

import { changeLanguage } from '../../actions/language';

import { Language } from '../../constants/language';

export interface HeaderProps {
  username: string;
  language: ResumeLanguage;
  dispatch: Dispatch<{}>;
}

class Header extends React.PureComponent<HeaderProps> {
  handleLanguageChanged = (language: Language) => {
    const { dispatch } = this.props;
    dispatch(changeLanguage(language));
  }

  render () {
    const { handleLanguageChanged } = this;
    const { username, language } = this.props;
    return (
      <div className="header">
        <span>{username}</span>
        <span>|</span>
        <span>{Language[language.language]}</span>
        <span>Generated by TypeResume</span>

        <Flag language={Language.Chinese} onClick={handleLanguageChanged}/>
        <Flag language={Language.English} onClick={handleLanguageChanged}/>
      </div>
    );
  }
}

const mapStateToProps = (state: ResumeModel) => ({
  language: state.global.language
});

export default connect(mapStateToProps)(Header);