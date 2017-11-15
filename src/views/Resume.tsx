import * as React from 'react';
import styled from 'styled-components';

import Header from '../components/container/Header';
import Content from '../components/container/Content';

const Container = styled.div`
  width: 860px;
  margin: 0 auto;
`;

export default class Resume extends React.PureComponent {
  render () {
    return (
      <Container>
        <Header />
        <Content />
      </Container>
    );
  }
}
