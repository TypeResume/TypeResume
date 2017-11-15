import * as React from 'react';
import styled from 'styled-components';

import Avatar from '../presentational/Avatar';

const AngryPowman = 'https://avatars2.githubusercontent.com/u/1910783?s=460&v=4';

const OverviewContainer = styled.div`
  height: 180px;
  padding-left: 180px;
  position: relative;
`;

const AvatarArea = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  padding: 10px;
`;

class Overview extends React.PureComponent {
  render () {
    return (
      <OverviewContainer>
        <AvatarArea>
          <Avatar src={AngryPowman}/>
        </AvatarArea>
      </OverviewContainer>
    );
  }
}

export default Overview;