import React from "react";

const Task = () => {
  return (
    <div className=" w-full md:w-1/3 ">
      <h1 className="font-semibold text-2xl mb-3">Task Status</h1>
      <div className="card shadow-lg p-3 bg-white">
        <h2 className="font-semibold text-lg mb-2">
          Payment Failed - Card Declined{" "}
        </h2>
        <button className="btn w-full bg-[#02A53B] text-white">Complete</button>
      </div>
      <div>
        <h1 className="mt-7 mb-3 font-semibold text-2xl">Resolved Task</h1>
        <p className="p-3 font-semibold bg-[#E0E7FF] rounded-lg">
          Incorrect Billing Address
        </p>
      </div>
    </div>
  );
};

export default Task;
