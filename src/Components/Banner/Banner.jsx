import React from "react";
import vector1 from "../../assets/vector1.png";
import vector2 from "../../assets/vector2.png";

const Banner = () => {
  return (
    <div className="max-w-11/12 mx-auto flex flex-col md:flex-row justify-between text-center text-white gap-5 m-16">
      {/* code from ai */}
      <div className="relative w-full md:w-1/2 py-16 rounded-lg overflow-hidden text-white text-center">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"></div>

        {/* Left vector */}
        <img
          src={vector1}
          alt="vector left"
          className="absolute left-0 top-0 h-full object-cover"
        />

        {/* Right vector (mirrored) */}
        <img
          src={vector1}
          alt="vector right"
          className="absolute right-0 top-0 h-full object-cover transform scale-x-[-1]"
        />

        {/* Content */}
        <div className="relative">
          <h3 className="text-2xl">In-Progress</h3>
          <h1 className="font-bold text-6xl">0</h1>
        </div>
      </div>

      <div className="banner w-full md:w-1/2 py-16 bg-gradient-to-r from-[#54CF68] to-[#00827A] rounded-lg">
        <h3 className="text-2xl">Resolved</h3>
        <h1 className="font-bold text-6xl">0</h1>
      </div>
    </div>
  );
};

export default Banner;
