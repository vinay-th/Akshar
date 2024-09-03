import PropTypes from 'prop-types';

const Divcard = ({ className = '' }) => {
  return (
    <div
      className={`self-stretch shadow-[32px_32px_64px_#c8c8c8,_-32px_-32px_64px_#fefefe] rounded-2xl [background:linear-gradient(180deg,_#2091c1,_#0f445b_67.5%)] flex flex-col items-start justify-start pt-[78px] px-[50px] pb-[100px] box-border gap-[69.3px] max-w-full text-left text-5xl text-black font-title mq700:gap-[35px] mq700:pt-[51px] mq700:px-[25px] mq700:pb-[65px] mq700:box-border mq450:gap-[17px] ${className}`}
    >
      <div className="w-[469px] flex flex-row items-start justify-center max-w-full text-29xl">
        <div className="flex flex-row items-start justify-start gap-[26px]">
          <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
            <img
              className="w-12 h-12 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/righttobracket-1.svg"
            />
          </div>
          <h1 className="m-0 relative text-inherit tracking-[4px] uppercase font-black font-inherit mix-blend-normal whitespace-nowrap">
            LOG IN
          </h1>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start max-w-full font-roboto">
        <div className="flex-1 rounded-t-none rounded-br-none rounded-bl-2xl border-black border-b-[4px] border-solid border-black border-l-[4px] border-solid box-border flex flex-row items-start justify-start pt-[22px] px-10 pb-[26px] max-w-full">
          <h1 className="m-0 relative text-inherit tracking-[6px] uppercase font-normal font-inherit mix-blend-normal z-[1] mq450:text-lgi">
            USERNAME
          </h1>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start max-w-full">
        <div className="flex-1 rounded-t-none rounded-br-none rounded-bl-2xl border-black border-b-[4px] border-solid border-black border-l-[4px] border-solid box-border flex flex-row items-start justify-start pt-[21px] px-10 pb-[26px] max-w-full">
          <h1 className="m-0 relative text-inherit tracking-[6px] uppercase font-normal font-inherit mix-blend-normal z-[1] mq450:text-lgi">
            PASSWORD
          </h1>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center">
        <button className="cursor-pointer border-black border-[4px] border-solid pt-[29px] pb-[27px] pl-[50px] pr-[46px] bg-[transparent] w-[200px] rounded-3xs box-border flex flex-row items-start justify-start hover:bg-darkslategray-300 hover:border-darkslategray-100 hover:border-[4px] hover:border-solid hover:box-border">
          <div className="relative text-xl tracking-[4px] uppercase font-roboto text-black text-center inline-block mix-blend-normal min-w-[96px] mq450:text-base">
            SUBMIT
          </div>
        </button>
      </div>
    </div>
  );
};

Divcard.propTypes = {
  className: PropTypes.string,
};

export default Divcard;
