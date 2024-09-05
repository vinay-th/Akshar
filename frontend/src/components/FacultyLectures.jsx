import React from 'react';
import styled from 'styled-components';

const FacultyLectures = ({ title, room, time }) => {
  if (!title || !room || !time) {
    title = 'Upcoming lectures';
    room = 'Room no. 302';
    time = '9:20';
  }
  return (
    <StyledWrapper>
      <div className="lecture-card">
        <p className="lecture-card-title">{title}</p>
        <p className="small-desc">{room}</p>
        <p className="small-desc">{time}</p>
        <div className="go-corner">
          <div className="go-arrow">&rarr;</div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .lecture-card-title {
    color: #262626;
    font-size: 1.5em;
    line-height: normal;
    font-weight: 700;
    margin-bottom: 0.5em;
  }

  .small-desc {
    font-size: 1em;
    font-weight: 400;
    padding-left: 0.75em;
    line-height: 1.5em;
    color: #000000;
    opacity: 0.45;
  }

  .small-desc {
    font-size: 1em;
  }

  .go-corner {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 2em;
    height: 2em;
    overflow: hidden;
    top: 0;
    right: 0;
    background: linear-gradient(135deg, #6293c8, #384c6c);
    border-radius: 0 4px 0 32px;
  }

  .go-arrow {
    margin-top: -4px;
    margin-right: -4px;
    color: white;
    font-family: courier, sans;
  }

  .lecture-card {
    display: block;
    position: relative;
    max-width: 452px;
    max-height: 126px;
    background-color: #f2f8f9;
    border-radius: 10px;
    padding: 12px 10px;
    margin: 12px;
    text-decoration: none;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(to bottom, #c3e6ec, #a7d1d9);
    font-family: Arial, Helvetica, sans-serif;
  }

  .lecture-card:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: linear-gradient(135deg, #364a60, #384c6c);
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: transform 0.35s ease-out;
  }

  .lecture-card:hover:before {
    transform: scale(30);
  }

  .lecture-card:hover .small-desc {
    transition: all 0.5s ease-out;
    color: rgba(255, 255, 255, 0.8);
  }

  .lecture-card:hover .lecture-card-title {
    transition: all 0.5s ease-out;
    color: #ffffff;
  }
`;

export default FacultyLectures;
