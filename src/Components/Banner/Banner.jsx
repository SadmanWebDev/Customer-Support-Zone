import React from "react";
import vector1 from "../../assets/vector1.png";

const Banner = ({ inProgress, resolved }) => {
  return (
    <div className="max-w-11/12 mx-auto flex flex-col md:flex-row justify-between text-center text-white gap-5 m-16">
      {/* code from ai */}
      <div className="relative w-full md:w-1/2 py-16 rounded-lg overflow-hidden text-white text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"></div>
        <img
          src={vector1}
          alt="vector left"
          className="absolute left-0 top-0 h-full object-cover"
        />
        <img
          src={vector1}
          alt="vector right"
          className="absolute right-0 top-0 h-full object-cover transform scale-x-[-1]"
        />
        <div className="relative">
          <h3 className="text-2xl">In-Progress</h3>
          <h1 className="font-bold text-6xl">{inProgress}</h1>
        </div>
      </div>
      {/* bg-gradient-to-r from-[#54CF68] to-[#00827A] */}

      <div className="relative w-full md:w-1/2 py-16 rounded-lg overflow-hidden text-white text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-[#54CF68] to-[#00827A]"></div>
        <img
          src={vector1}
          alt="vector left"
          className="absolute left-0 top-0 h-full object-cover"
        />
        <img
          src={vector1}
          alt="vector right"
          className="absolute right-0 top-0 h-full object-cover transform scale-x-[-1]"
        />
        <div className="relative">
          <h3 className="text-2xl">Resolved</h3>
          <h1 className="font-bold text-6xl">{resolved}</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
