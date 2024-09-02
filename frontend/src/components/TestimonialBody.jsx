import PropTypes from 'prop-types';

const TestimonialBody = ({ className = '' }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[27.6px] text-left text-mini text-white font-mainpara ${className}`}
    >
      <div className="flex flex-row items-start justify-start py-0 px-[3px]">
        <img
          className="h-[42.2px] w-[59.1px] relative"
          loading="lazy"
          alt=""
          src="/quotes.svg"
        />
      </div>
      <div className="self-stretch relative leading-[18.75px] mix-blend-normal z-[3]">
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
          laboriosam at voluptas minus culpa deserunt delectus
        </p>
        <p className="m-0">sapiente inventore pariatur</p>
      </div>
    </div>
  );
};

TestimonialBody.propTypes = {
  className: PropTypes.string,
};

export default TestimonialBody;
