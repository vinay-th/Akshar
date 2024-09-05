import React from 'react';
import './Footer-style.css';
import logo from '../../public/footer/logo.svg';
import mail from '../../public/footer/mail.svg';
import phone from '../../public/footer/phone.svg';
import facebook from '../../public/footer/facebook.svg';
import instagram from '../../public/footer/instagram.svg';
import twitter from '../../public/footer/x.svg';
import github from '../../public/footer/github.svg';
import ApplicationBtn from './ApplicationBtn';
const Footer = () => {
  return (
    <div className="footer" id="Contact">
      <div className="content-wrap">
        <img src={logo} alt="logo" className="logo" />
        <div className="text-ff">
          Assistant of Knowledge and Student Handling with Automated Resources
        </div>
        <div className="contacts">
          <div className="media">
            <div className="social-media">
              <a href="mailto:akshar@gmail.com">
                <img src={mail} alt="mail" className="mail" />
              </a>
              <span className="txt">&nbsp;akshar@gmail.com</span>
              <br />
              <img src={phone} alt="phone" className="phone" />
              <span className="txt">&nbsp;+91 9876543210</span>
              <br />
              <a href="https://www.github.com/vinay-th/akshar">
                <img
                  src={facebook}
                  alt="facebook"
                  className="facebook socials"
                />
              </a>
              <a href="https://www.github.com/vinay-th/akshar">
                <img
                  src={instagram}
                  alt="instagram"
                  className="instagram socials"
                />
              </a>
              <a href="https://www.github.com/vinay-th/akshar">
                <img src={twitter} alt="twitter" className="twitter socials" />
              </a>
              <a href="https://www.github.com/vinay-th/akshar">
                <img src={github} alt="github" className="github socials" />
              </a>
            </div>
            <div className="applications">
              <ApplicationBtn className="app-btn ios" app="ios" />
              <ApplicationBtn className="app-btn android" app="android" />
            </div>
          </div>

          <div className="end">
            <span>© 2024 Akshar All rights reserved.</span>
            <span>Community guidelines</span>
            <span>Security</span>
            <span>Privacy Policy</span>
            <span>T&C</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
