import React from "react";

const Progress = () => {
  return (
    <div className="bg-gradient-to-bl from-[#9F62F2] to-[#632EE3]">
      <div className="py-15 w-11/12 mx-auto text-white">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-5">Trusted by Millions, Built for You</h2>
        <div className="flex flex-col gap-4 md:flex-row justify-around">
          <div className="flex flex-col items-center gap-1 shadow-lg p-2 rounded-md">
            <p>Total Downloads</p>
            <strong className="text-6xl font-black">29.6M</strong>
            <p>21% more than last month</p>
          </div>
          <div className="flex flex-col items-center gap-1 shadow-lg p-2 rounded-md">
            <p>Total Reviews</p>
            <strong className="text-6xl font-black">906K</strong>
            <p>46% more than last month</p>
          </div>
          <div className="flex flex-col items-center gap-1 shadow-lg p-2 rounded-md">
            <p>Active Apps</p>
            <strong className="text-6xl font-black">132+</strong>
            <p>31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
