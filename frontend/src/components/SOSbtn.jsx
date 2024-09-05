import React from 'react';
import styled from 'styled-components';

const SOSbtn = () => {
  return (
    <StyledWrapper>
      <button className="noselect" id="btn-sos">
        <span className="text-btn">SOS</span>
        <span className="icon-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
          </svg>
        </span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  #btn-sos {
    width: 160px;
    height: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    background: red;
    border: none;
    border-radius: 5px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.15);
    background: #e62222;
  }

  #btn-sos .text-btn,
  #btn-sos .icon-btn {
    transition: 200ms;
  }

  #btn-sos .text-btn {
    transform: translateX(35px);
    color: white;
    font-weight: bold;
  }

  #btn-sos .icon-btn {
    position: absolute;
    border-left: 1px solid #c41b1b;
    transform: translateX(110px);
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #btn-sos svg {
    width: 15px;
    fill: #eee;
  }

  #btn-sos:hover {
    background: #ff3636;
  }

  #btn-sos:hover .text-btn {
    color: transparent;
  }

  #btn-sos:hover .icon-btn {
    width: 150px;
    border-left: none;
    transform: translateX(0);
  }

  #btn-sos:focus {
    outline: none;
  }

  #btn-sos:active .icon-btn svg {
    transform: scale(0.8);
  }
`;

export default SOSbtn;
