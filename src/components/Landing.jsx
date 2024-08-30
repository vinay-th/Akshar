import PropTypes from 'prop-types';

const Landing = ({ className = '' }) => {
  return (
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
        <header className="self-stretch flex flex-row items-start justify-between pt-[19px] pb-5 pl-[75px] pr-[11px] box-border sticky top-[0] z-[99] max-w-full gap-5 text-left text-13xl text-royalblue font-mainpara lg:pl-[37px] lg:box-border">
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <a className="[text-decoration:none] relative font-medium text-[inherit] inline-block min-w-[112px] whitespace-nowrap z-[2]">
              kshar
            </a>
          </div>
          <img
            className="h-full w-[81px] absolute !m-[0] top-[0px] bottom-[0px] left-[0px] max-h-full object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/a-1@2x.png"
          />
          <div className="w-[574px] flex flex-row items-end justify-start gap-6 max-w-full mq750:hidden">
            <nav className="m-0 flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[11px]">
              <nav className="m-0 self-stretch h-[19px] relative text-left text-lg text-darkslategray-200 font-title">
                <a className="nav-home [text-decoration:none] absolute top-[0px] left-[0px] leading-[23px] text-[inherit] inline-block w-[52px] h-[19px] min-w-[52px] z-[1]">
                  Home
                </a>
                <a className="nav-about [text-decoration:none] absolute top-[0px] left-[72px] leading-[23px] text-[inherit] inline-block w-[54px] h-[19px] min-w-[54px] whitespace-nowrap z-[1]">
                  About
                </a>
                <a className="nav-faq [text-decoration:none] absolute top-[0px] left-[146px] leading-[23px] text-[inherit] inline-block w-[52px] h-[19px] z-[1]">
                  FAQs
                </a>
                <a className="nav-contact [text-decoration:none] absolute top-[0px] left-[218px] leading-[23px] text-[inherit] inline-block w-[66px] h-[19px] min-w-[66px] whitespace-nowrap z-[1]">
                  Contact
                </a>
              </nav>
            </nav>
            <button className="student cursor-pointer border-black border-[1px] border-solid py-[7px] pl-[22px] pr-[21px] bg-white overflow-hidden flex flex-row items-start justify-start z-[1] hover:bg-gainsboro hover:border-darkslategray-100 hover:border-[1px] hover:border-solid hover:box-border">
              <a className="[text-decoration:none] relative text-xl leading-[25px] font-bold font-title text-black text-left inline-block min-w-[76px] whitespace-nowrap">
                Student
              </a>
            </button>
            <button className="faculty cursor-pointer [border:none] py-[8.5px] px-[25px] bg-black overflow-hidden flex flex-row items-start justify-start z-[1] hover:bg-darkslategray-100">
              <a className="[text-decoration:none] relative text-xl leading-[25px] font-bold font-title text-white text-left inline-block min-w-[70px] whitespace-nowrap">
                Faculty
              </a>
            </button>
          </div>
        </header>
        <div className="w-[713px] flex flex-row items-start justify-start py-0 px-[5px] box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-5 max-w-full">
            <h1 className="main-home-text m-0 self-stretch relative text-inherit font-black font-inherit z-[1] mq450:text-19xl mq1050:text-32xl">
              Learn, Connect, Grow.
            </h1>
            <div className="w-[667px] flex flex-row items-start justify-start py-0 px-[3px] box-border max-w-full text-lg text-main-para font-mainpara">
              <div className="main-home-desc flex-1 relative leading-[25px] inline-block max-w-full z-[1]">
                Lorem ipsum dolor sit amet. Est voluptatibus obcaecati est
                similique assumenda cum doloribus tenetur assumenda cum
                doloribus tenetur et eius 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  className: PropTypes.string,
};

export default Landing;
