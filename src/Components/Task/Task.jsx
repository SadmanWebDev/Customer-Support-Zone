import React from "react";

const Task = ({ taskStatus, handleResolved, resolvedTask }) => {
  return (
    <div className=" w-full md:w-1/3 ">
      <h1 className="font-semibold text-2xl mb-3">Task Status</h1>
      <div className="space-y-5">
        {taskStatus.map((customer) => (
          <div key={customer.id} className="card shadow-lg p-3 bg-white">
            <h2 className="font-semibold text-lg mb-2">{customer.title}</h2>
            <button
              onClick={() => handleResolved(customer)}
              className="btn w-full bg-[#02A53B] text-white"
            >
              Complete
            </button>
          </div>
        ))}
      </div>
      <div className="border border-gray-300 mt-5"></div>
      <div>
        <h1 className="mt-5 mb-3 font-semibold text-2xl">Resolved Task</h1>
        {resolvedTask.map((task) => (
          <p
            key={task.id}
            className="p-3 font-semibold bg-[#E0E7FF] rounded-lg mb-3 shadow-md"
          >
            {task.title}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Task;
