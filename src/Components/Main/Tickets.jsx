import React, { use } from "react";
import CustomerCard from "../Customer Card/CustomerCard";

const Tickets = ({ customersPromise }) => {
  const customersData = use(customersPromise);
  return (
    <div className="flex flex-col md:flex-row max-w-11/12 mx-auto gap-5">
      <div>
        <h1 className="font-semibold text-2xl mb-3">Customer Tickets</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {customersData.map((customer) => (
            <CustomerCard key={customer.id} customer={customer}></CustomerCard>
          ))}
        </div>
      </div>
      <div className="w-1/3">
        <h1 className="font-semibold text-2xl mb-3">Task Status</h1>
        <div className="card shadow-lg p-3 bg-white">
          <h2 className="font-semibold text-lg mb-2">
            hi my name is Sadman Surad{" "}
          </h2>
          <button className="btn w-full bg-[#02A53B] text-white">
            Complete
          </button>
        </div>
        <div>
          <h1 className="mt-7 mb-3 font-semibold text-2xl">Resolved Task</h1>
          <p className="p-3 font-semibold bg-[#E0E7FF] rounded-lg">
            Incorrect Billing Address
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
