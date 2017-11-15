import * as React from 'react';
import styled from 'styled-components';

const defaultImageSize = '160px';

const Img = styled.img`
  width: ${props => props.width || defaultImageSize};
  height: ${props => props.height || defaultImageSize};
  border-radius: 4px;
`;

interface AvatarProps {
  src: string;
  width?: string;
  height?: string;
}

class Avatar extends React.PureComponent<AvatarProps> {
  render () {
    const { src, width, height } = this.props;
    return (
      <Img src={src} width={width} height={height}/>
    );
  }
}

export default Avatar;