const Home = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start gap-[7px] leading-[normal] tracking-[normal]">
      <img
        className="ml-[-58px] w-[1893px] relative max-h-full object-cover max-w-[124%] shrink-0"
        alt=""
        src="/image-2@2x.png"
      />
      <section className="self-stretch flex flex-row items-start justify-start max-w-full text-left text-[36px] text-white font-inter">
        <div className="h-[628px] w-[1537px] relative max-w-full">
          <div className="absolute top-[122px] left-[-58px] w-[1595px] h-[616px]">
            <div className="absolute top-[0px] right-[0px] bg-sienna w-[1181px] h-[536px] z-[1]" />
            <div className="absolute top-[168.4px] right-[937.2px] bg-sienna w-[657.8px] h-[447.6px] z-[2]" />
            <div className="absolute top-[0px] left-[58px] w-[1166px] h-[506px]">
              <div className="absolute top-[0px] left-[-7.8px] rounded-[230px] bg-sienna w-[1047.8px] h-[535.7px]" />
              <div className="absolute top-[133px] left-[101px] inline-block w-[1065px] h-[220px] z-[3] mq450:text-[22px] mq750:text-10xl">
                <ul className="m-0 font-inherit text-inherit pl-12">
                  <li className="mb-0">
                    Experience luxury in the middle of the desert in this
                    opulent oasis in Dubai with a private pool.
                  </li>
                  <li className="mb-0">Dubai</li>
                  <li className="mb-0">United Arab Emirates</li>
                  <li>₹ 5,100</li>
                </ul>
              </div>
            </div>
          </div>
          <img
            className="absolute top-[0px] left-[1097px] rounded-[44px] w-[339px] h-[351px] object-cover z-[3]"
            loading="lazy"
            alt=""
            src="/image-1@2x.png"
          />
        </div>
        <div className="w-[629px] flex flex-col items-start justify-start pt-[42px] px-0 pb-0 box-border max-w-full ml-[-1323px] text-[48px] text-black">
          <div className="self-stretch relative mq450:text-10xl mq750:text-19xl">
            Desert Oasis in Dubai
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
