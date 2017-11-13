import * as React from 'react';

import Header from '../components/Header';

export interface ResumeProps {
}

export default class Resume extends React.PureComponent<ResumeProps> {
  render () {
    return (
      <div className="resume-container">
        <Header username="AngryPowman"/>
      </div>
    );
  }
}
