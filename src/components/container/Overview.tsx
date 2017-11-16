import * as React from 'react';
import styled from 'styled-components';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import Avatar from '../presentational/Avatar';
import Description from '../presentational/Description';
import { ResumeModel } from '../../models/resume';
import { Profile } from '../../models/profile';

const OverviewContainer = styled.div`
  height: 180px;
  padding-left: 180px;
  padding-right: 300px;
  position: relative;
`;

const AvatarArea = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  padding: 10px;
`;

const Profile = styled.div`
  padding-top: 20px;
  padding-left: 10px;
  text-align: left;
`;

const Username = styled.div`
  color: #525252;
  font-size: 36px;
  font-weight: bold;
`;

const Statistic = styled.div`
  width: 300px;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
`;

const StatisticColumn = styled.div`
  flex-basis: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
`;

const StatisticItem = styled.div`
  display: flex;
  flex: 1;
`;

const Level = styled.div`
  color: #C51A1A;
  font-size: 13px;
`;

const Website = styled.div`
`;

export interface OverviewProps {
  profile: Profile;
  dispatch: Dispatch<{}>;
}

class Overview extends React.PureComponent<OverviewProps> {
  render () {
    const { profile } = this.props;
    const { avatar, username, repos, stars, followers, orgs, website } = profile;
    const level = 'ENTHUSIASTIC GITHUB USER';
    return (
      <OverviewContainer>
        <AvatarArea>
          <Avatar src={avatar}/>
        </AvatarArea>
        <Profile>
          <Username>{username}</Username>
          <Level>{level}</Level>
          <Website>{website}</Website>
        </Profile>
        <Statistic>
          <StatisticColumn>
            <StatisticItem>
              <Description value={repos} label="Repositories" />
            </StatisticItem>
            <StatisticItem>
              <Description value={stars} label="Stars" />
            </StatisticItem>
          </StatisticColumn>
          <StatisticColumn>
            <StatisticItem>
              <Description value={followers} label="Followers" />
            </StatisticItem>
            <StatisticItem>
              <Description value={orgs} label="Organizations" />
            </StatisticItem>
          </StatisticColumn>
        </Statistic>
      </OverviewContainer>
    );
  }
}

const mapStateToProps = (state: ResumeModel) => ({
  profile: state.profile,
});

export default connect(mapStateToProps)(Overview);