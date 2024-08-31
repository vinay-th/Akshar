import React from 'react';
import Landing from '../components/Landing';
import Features from '../components/Features';

const Herosection = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[1517px] box-border gap-[116px] leading-[normal] tracking-[normal]">
      <Landing />
      <Features />
    </div>
  );
};

export default Herosection;
