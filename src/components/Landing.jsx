import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import './Landing.css'; // Add this line

const Landing = ({ className = '' }) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991 && isNavExpanded) {
        setIsNavExpanded(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isNavExpanded]);

  return (
    <div className="w-full">
      <header className="w-full navbar navbar-expand-lg navbar-light sticky-top custom-navbar">
        <div
          className="container-fluid custom-container"
          style={{ paddingLeft: '0px' }}
        >
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img
              src="/a-1@2x.png"
              alt="Akshar Logo"
              width="81"
              height="81"
              className="d-inline-block align-text-top brand-logo m-[0]"
            />
            <span className="font-medium text-royalblue brand-text">kshar</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsNavExpanded(!isNavExpanded)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`navbar-collapse justify-content-end ${
              isNavExpanded ? 'show' : ''
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <div className="main-btns d-flex ms-lg-3">
              <button className="btn btn-outline-dark me-2">Student</button>
              <button className="btn btn-dark">Faculty</button>
            </div>
          </div>
        </div>
      </header>

      <section
        className={`self-stretch flex flex-row items-start justify-start relative max-w-full text-left text-45xl text-title font-title ${className}`}
      >
        <img
          className="h-[354px] w-[417px] absolute !m-[0] right-[187px] bottom-[-14px] object-cover z-[1]"
          loading="lazy"
          alt=""
          src="/881283d330d1466ca78cfec8c89ded05-1@2x.png"
        />
        <div className="flex-1 rounded-t-none rounded-br-281xl rounded-bl-none bg-bg flex flex-col items-start justify-start pt-[33px] px-[120px] pb-[141px] box-border gap-[90px] max-w-full gap-[22px] mq450:pl-5 mq450:pr-5 mq450:box-border gap-[45px] mq750:pt-[21px] mq750:px-[60px] mq750:pb-[92px] mq750:box-border">
          <div className="w-[1440px] h-[520px] relative rounded-t-none rounded-br-281xl rounded-bl-none bg-bg hidden max-w-full" />
          <div className="w-[713px] ms-[10px] flex flex-row items-start justify-start py-0 px-[5px] box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-5 max-w-full">
              <h1 className="main-home-text m-0 self-stretch relative text-inherit font-black font-inherit z-[1] mq450:text-19xl mq1050:text-32xl">
                Learn, Connect, Grow.
              </h1>
              <div className="w-[667px] flex flex-row items-start justify-start py-0 px-[3px] box-border max-w-full text-lg text-main-para font-mainpara">
                <div className="main-home-desc flex-1 relative leading-[25px] inline-block max-w-full z-[1]">
                  Experience the future of education with Akshar. Our
                  cutting-edge technology delivers personalized learning,
                  improved outcomes, and a more enjoyable classroom experience.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Landing.propTypes = {
  className: PropTypes.string,
};

export default Landing;
