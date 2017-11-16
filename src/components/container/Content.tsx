import * as React from 'react';
import styled from 'styled-components';

import Overview from './Overview';

const Container = styled.div`
  background: #F0F0F0;
`;

class Content extends React.PureComponent {
  render () {
    return (
      <Container>
        <Overview/>
      </Container>
    );
  }
}

export default Content;