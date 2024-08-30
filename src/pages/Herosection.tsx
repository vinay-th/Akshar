import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";

const Herosection: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[1517px] box-border gap-[116px] leading-[normal] tracking-[normal] mq450:gap-[29px] mq750:gap-[58px]">
      <FrameComponent1 />
      <FrameComponent2 />
    </div>
  );
};

export default Herosection;
