import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Divcard1 = ({ question, answer }) => {
  return (
    <StyledCard>
      <div className="card2-container">
        <div className="card2">
          <div className="front-content2">
            <p>{question}</p>
          </div>
          <div className="content2">
            <p className="heading">{question}</p>
            <p className="text">{answer}</p>
          </div>
        </div>
      </div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  .card2-container {
    width: 370px;
    height: 270px;
    position: relative;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    text-align: center;
  }

  .card2 {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    position: relative;
  }

  .card2 .front-content2 {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
  }

  .card2 .front-content2 p {
    font-size: 32px;
    font-weight: 700;
    background: rgb(0, 0, 0);
    background: rgb(0, 0, 0);
    background: linear-gradient(135deg, #3f0071, #1e3a8a);

    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card2 .content2 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 10px;
    background: rgb(0, 0, 0);
    background: rgb(0, 0, 0);
    background: linear-gradient(135deg, #3f0071, #1e3a8a);
    padding: 20px;
    line-height: 1.5;
    border-radius: 5px;
    z-index: 1;
    transform: translateY(50%);
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .card2 .content2 .heading {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
  }

  .card2 .content2 .text {
    color: white;
    font-size: 1.15rem;
    font-weight: 400;
  }

  .card2:hover .content2 {
    transform: translateY(0);
  }

  .card2:hover .front-content2 {
    transform: translateY(-97%);
    color: white !important;
  }
`;

Divcard1.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default Divcard1;
