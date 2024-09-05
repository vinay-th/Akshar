import React from 'react';
import Landing from '../components/Landing';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials.jsx';
import FAQ from '../components/FAQ.jsx';
import OurTeam from '../components/OurTeam.jsx';
import Footer from '../components/Footer.jsx';

const Herosection = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 box-border leading-[normal] tracking-[normal]">
      <Landing />
      <Features />
      <Testimonials />
      <FAQ />
      <OurTeam />
      <Footer />
    </div>
  );
};

export default Herosection;
