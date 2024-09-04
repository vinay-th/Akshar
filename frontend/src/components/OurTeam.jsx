import React from 'react';
import team from '../../public/people-svg.svg';
import styled from 'styled-components';

const OurTeam = () => {
  return (
    <StyledOurTeam>
      <div className="our-team-container">
        <div className="content-wrapper">
          <img src={team} alt="team" className="team-image" />
          <h2 className="our-team-title">Our Team</h2>
        </div>
      </div>
    </StyledOurTeam>
  );
};

const StyledOurTeam = styled.div`
  .our-team-container {
    width: 100vw;
    height: 100vh;
    display: flex;
  }

  .content-wrapper {
    display: flex;
    margin-left: 110px;
  }

  .team-image {
    width: 100px;
    height: 100px;
  }

  .our-team-title {
    font-size: 64px;
    font-family: 'Mulish', sans-serif;
    color: rgb(28, 130, 173);
    margin-left: 20px;
    padding-top: 15px;
    line-height: 1;
    font-weight: 700;
  }
`;

export default OurTeam;
