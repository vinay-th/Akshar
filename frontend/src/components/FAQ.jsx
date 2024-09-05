import PlatformInfo from '../components/PlatformInfo';

const FAQ = () => {
  return (
    <div className="w-full relative overflow-hidden flex flex-col items-start justify-start pt-[72px] px-[500px] pb-[104px] box-border gap-[95px] leading-[normal] tracking-[normal] text-left text-21xl text-title font-title mq450:gap-6 mq450:pl-5 mq450:pr-5 mq450:box-border mq750:gap-[47px] mq750:pl-[63px] mq750:pr-[63px] mq750:box-border">
      <div
        className="self-stretch flex flex-row items-start justify-center py-0 pl-[21px] pr-5"
        style={{ width: '1000px' }}
      >
        <div
          className="relative top-[50px] font-black mq450:text-5xl mq750:text-13xl"
          style={{ width: '1000px' }}
          id="FAQ"
        >
          Frequently Asked Questions
        </div>
      </div>
      <PlatformInfo />
    </div>
  );
};

export default FAQ;
