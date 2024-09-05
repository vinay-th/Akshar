import React from 'react';
import team from '../../public/people-svg.svg';
import rocket from '../../public/rocket-launch.svg';
import styled from 'styled-components';

import teamImg from '../../public/team.svg';

const OurTeam = () => {
  return (
    <StyledOurTeam id="about">
      <div className="our-team-container">
        <div className="content-wrapper">
          <div className="team-section top-[2970px] absolute">
            <br />
            <img src={team} alt="team" className="team-image" />
            <h2 className="our-team-title ">Our Team</h2>
          </div>
          <div className="team-img">
            <img
              src={teamImg}
              alt="team"
              className="team-image"
              draggable="false"
            />
          </div>
          <div className="our-story">
            <div className="our-story-header">
              <img src={rocket} alt="rocket" className="rocket-launch" />
              <h2 className="our-story-title">Our Story</h2>
            </div>
            <div className="our-story-desc">
              <p className="desc">
                <span className="aksh">Akshar</span>,{' '}
                <span className="our-story-desc-text">
                  a collaborative project by six dedicated students, was born
                  out of a passion for education and a desire to make a positive
                  impact. Recognizing the challenges faced by students and
                  faculty in today's rapidly changing educational landscape, we
                  embarked on a journey to create a comprehensive and innovative
                  platform. Through countless hours of research, development,
                  and collaboration, we brought Akshar to life.
                </span>
                <br />
                <br />
                <span className="our-story-desc-text">
                  Akshar is more than just an app; it's a testament to our
                  commitment to innovation and our belief in the transformative
                  power of education. We are excited to see how Akshar will
                  contribute to the educational landscape and empower learners
                  across India.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </StyledOurTeam>
  );
};

const StyledOurTeam = styled.div`
  .our-team-container {
    width: 100vw;
    max-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 150vh;
    padding: 50px 110px;
    box-sizing: border-box;
  }

  .team-section {
    display: flex;
    align-items: center;
    margin-bottom: 5vh; // This creates the 50vh gap
  }

  .team-img {
    display: flex;
    width: 100%;
    height: 70vh;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
    dragable: false;
  }

  .our-team-title {
    font-size: 64px;
    font-family: 'Mulish', sans-serif;
    color: black;
    margin-left: 20px;
    line-height: 1;
    font-weight: 800;
  }

  .our-story {
    display: flex;
    flex-direction: column;
    margin-top: auto; // This pushes the Our Story section to the bottom
  }

  .our-story-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .rocket-launch {
    width: 64px;
    height: 64px;
    margin-right: 10px;
  }

  .our-story-title {
    font-size: 64px;
    font-family: 'Mulish', sans-serif;
    color: black;
    line-height: 1;
    font-weight: 800;
  }

  .our-story-desc {
    width: 1900px;
    max-width: 100%;
    font-family: 'Lexend Exa', sans-serif;
    color: black;
    line-height: 1.5;
    font-size: 18px;
    line-height: 1.7;
  }

  .our-story-desc-text {
    opacity: 0.41;
    font-weight: 600;
    width: 1850px;
    max-width: 100%;
  }

  .aksh {
    color: #1c82ad;
    opacity: 1 !important;
    font-weight: 800;
  }
`;

export default OurTeam;
