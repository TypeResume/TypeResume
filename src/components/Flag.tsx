import * as React from 'react';

export interface FlagProps {
  language: string;
  onClick?: (language: string) => void;
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
      <button onClick={handleClick}>{language}</button>
    );
  }
}