import * as React from 'react';

import { Language } from '../../constants/language';

export interface FlagProps {
  language: Language;
  onClick?: (language: Language) => void;
}

export default class Flag extends React.PureComponent<FlagProps> { 
  handleClick = () => {
    const { language, onClick } = this.props;
    if (onClick) {
      onClick(language);
    }
  }

  render () {
    const { handleClick } = this;
    const { language } = this.props;

    return (
      <button onClick={handleClick}>{Language[language]}</button>
    );
  }
}