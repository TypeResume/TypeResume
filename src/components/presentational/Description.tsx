import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  width: 100%;
`;

const Value = styled.div`
  color: #525252;
  font-size: 20px;  
`;

const Label = styled.div`
  color: #7B7B7B;
  font-size: 14px;
`;

export interface DescriptionProps {
  value: string | number;
  label: string | number;
}

export default class Description extends React.PureComponent<DescriptionProps> {
  render () {
    const { value, label } = this.props;
    return (
      <Container>
        <Value>{value}</Value>
        <Label>{label}</Label>
      </Container>
    );
  }
}