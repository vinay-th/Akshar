import TestimonialBody from './TestimonialBody';
import PropTypes from 'prop-types';

const TestimonialContainer = ({ className = '' }) => {
  return (
    <section
      className={`w-[1184px] flex flex-col items-end justify-start gap-[0.8px] max-w-full text-left text-mini text-white font-mainpara ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start max-w-full">
        <img
          className="w-[451px] relative max-h-full object-contain mt-[-1px] max-w-full"
          loading="lazy"
          alt=""
          src="/line-2.svg"
        />
      </div>
      <img
        className="w-[451px] relative max-h-full object-contain max-w-full"
        loading="lazy"
        alt=""
        src="/line-3.svg"
      />
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-5 mq975:flex-wrap">
        <div className="h-[405px] w-[450px] relative rounded-[30.94px] overflow-hidden shrink-0 max-w-full mq450:h-auto mq450:min-h-[405]">
          <div className="absolute top-[-32.4px] left-[22.5px] w-[405px] h-[380.7px]">
            <textarea
              className="[border:none] bg-lavender h-[324px] w-[360px] [outline:none] absolute top-[0px] left-[22.5px] rounded-[30.94px]"
              rows={16}
              cols={18}
            />
            <div className="absolute top-[16.2px] left-[0px] rounded-[30.94px] bg-lightsteelblue w-[405px] h-[364.5px] z-[1]" />
          </div>
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[30.94px] bg-black overflow-hidden flex flex-col items-start justify-start pt-[60px] pb-[45px] pl-[50px] pr-11 box-border gap-[74.7px] max-w-full z-[2] mq450:gap-[37px] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <TestimonialBody />
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[3px] pr-3 box-border max-w-full text-11xl font-title">
              <div className="flex-1 flex flex-row items-end justify-start gap-[18.7px] max-w-full mq450:flex-wrap">
                <img
                  className="h-12 w-12 relative"
                  loading="lazy"
                  alt=""
                  src="/vector-1.svg"
                />
                <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[5px] box-border min-w-[178px]">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="flex flex-row items-start justify-start pt-0 px-0 pb-0">
                      <h1 className="mb-[-0.5px] m-0 relative text-inherit font-black font-inherit shrink-0 mq450:text-lg mq950:text-5xl">
                        John Doe
                      </h1>
                    </div>
                    <div className="relative text-sm-5 leading-[19px] font-mainpara shrink-0">
                      Faculty at Martial Arts Designing
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[405px] w-[450px] relative rounded-[30.94px] overflow-hidden shrink-0 max-w-full text-11xl font-title mq450:h-auto mq450:min-h-[405]">
          <div className="absolute top-[-32.4px] left-[22.5px] w-[405px] h-[380.7px]">
            <textarea
              className="[border:none] bg-lavender h-[324px] w-[360px] [outline:none] absolute top-[0px] left-[22.5px] rounded-[30.94px]"
              rows={16}
              cols={18}
            />
            <div className="absolute top-[16.2px] left-[0px] rounded-[30.94px] bg-lightsteelblue w-[405px] h-[364.5px] z-[1]" />
          </div>
          <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[30.94px] bg-black overflow-hidden flex flex-col items-start justify-start pt-[60px] pb-[31px] pl-[50px] pr-11 box-border gap-[74.7px] max-w-full z-[2] mq450:gap-[37px] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <TestimonialBody />
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-[3px] pr-3 box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-start gap-[18.7px] max-w-full mq450:flex-wrap">
                <div className="flex flex-col items-start justify-start pt-[13.5px] px-0 pb-0">
                  <img
                    className="w-12 h-12 relative"
                    loading="lazy"
                    alt=""
                    src="/vector-1.svg"
                  />
                </div>
                <div className="flex-1 flex flex-col items-start justify-start min-w-[178px]">
                  <h1 className="m-0 relative text-inherit font-black font-inherit shrink-0 mq450:text-lg mq950:text-5xl">
                    John Doe
                  </h1>
                  <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-0 text-sm-5 font-mainpara">
                    <div className="mt-[-0.5px] flex-1 relative leading-[18.75px] shrink-0">
                      Student at Martial Arts Designing
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

TestimonialContainer.propTypes = {
  className: PropTypes.string,
};

export default TestimonialContainer;
