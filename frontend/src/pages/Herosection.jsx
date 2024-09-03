import React from 'react';
import Landing from '../components/Landing';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

const Herosection = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[1000px] box-border leading-[normal] tracking-[normal]">
      <Landing />
      <Features />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Herosection;
