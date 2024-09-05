import PropTypes from 'prop-types';

const Features = ({ className = '' }) => {
  return (
    <section
      className={`w-[1337px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-21xl text-black font-title ${className}`}
    >
      <div className="w-[1081px]  flex flex-row items-end justify-between max-w-full gap-5 mq1050:flex-wrap">
        <div className="w-[425px] flex flex-col items-start justify-start gap-[115px] min-w-[425px] max-w-full gap-[57px] mq750:min-w-full mq1050:flex-1">
          <div className="self-stretch flex mt-100 flex-col items-start justify-start gap-[24.6px] max-w-full">
            <div className="flex flex-row items-start justify-start py-0 px-1">
              <img
                className="h-[79.4px] w-[69.4px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/qrcode-2.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[17px] shrink-0 max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-0 box-border max-w-full">
                <h1 className="m-0 flex-1 relative text-inherit font-black font-inherit inline-block max-w-full mq450:text-5xl mq1050:text-13xl">
                  Attendance tracking
                </h1>
              </div>
              <div className="w-[393px] relative text-lg leading-[25px] font-mainpara text-main-para inline-block max-w-full">
                Easily track student attendance using facial recognition.
                Receive instant notifications about attendance status.
              </div>
            </div>
          </div>
          <div className="w-[410px] flex flex-col items-start justify-start gap-[23.4px] max-w-full">
            <div className="flex flex-row items-start justify-start py-0 px-[3px]">
              <img
                className="h-[73.6px] w-[64.4px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/book-1.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[11px] max-w-full">
              <h1 className="m-0 self-stretch relative text-inherit font-black font-inherit mq450:text-5xl mq1050:text-13xl">
                Lecture Notes and Resources
              </h1>
              <div className="w-[379px] flex flex-row items-start justify-start py-0 px-[3px] box-border max-w-full text-lg text-main-para font-mainpara">
                <div className="flex-1 relative leading-[25px] inline-block max-w-full">
                  Download and review lecture materials at your convenience.
                  Find additional resources to supplement your learning.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[373px] flex flex-col items-start justify-end pt-0 px-0 pb-px box-border min-w-[373px] max-w-full mq450:min-w-full mq1050:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[120px] max-w-full gap-[60px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[29.4px] max-w-full">
              <div className="flex flex-row items-start justify-start py-0 px-1">
                <img
                  className="h-[73.6px] w-[92px] relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/chalkboarduser-1.svg"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[15px] max-w-full">
                <h1 className="m-0 relative text-inherit font-black font-inherit mq450:text-5xl mq1050:text-13xl">
                  Faculty Portal
                </h1>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-0 box-border max-w-full text-lg text-main-para font-mainpara">
                  <div className="flex-1 relative leading-[25px] inline-block max-w-full">
                    Faculty can easily manage their lectures, attendance, and
                    announcements. Communicate with students effectively.
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[31px] gap-[15px]">
              <img
                className="w-[72px] h-16 relative"
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[7px]">
                <h1 className="m-0 w-[302px] relative text-inherit font-black font-inherit inline-block mq450:text-5xl mq1050:text-13xl">
                  Timetable and Calendar
                </h1>
                <div className="self-stretch relative text-lg leading-[25px] font-mainpara text-main-para">
                  View your schedule and deadlines in a clear and concise
                  format. Plan your studies and assignments efficiently.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Features.propTypes = {
  className: PropTypes.string,
};

export default Features;
