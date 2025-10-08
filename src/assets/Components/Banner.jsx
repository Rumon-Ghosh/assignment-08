import React from "react";
import heroImage from '../Images/hero.png';

const Banner = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex flex-col justify-center items-center gap-6">
        <h1 className="text-center text-5xl lg:text-[72px]/17 font-bold text-[#001931]">We Build <br /> <span className="text-[#9F62F2]">Productive</span> Apps</h1>
        <p className="max-w-[800px] text-[#627382] text-[20px] text-center">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
        <div className="flex gap-5">
          <a className="btn btn-outline" target="_blank" href="https://play.google.com/store/apps/">Google Play</a>
          <a className="btn btn-outline" target="_blank" href="https://www.apple.com/app-store/">App Store</a>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <img className="w-fit" src={heroImage} />
      </div>
    </div>
  );
};

export default Banner;
