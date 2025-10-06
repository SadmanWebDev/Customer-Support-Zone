import React, { use } from "react";
import CustomerCard from "../Customer Card/CustomerCard";
import Task from "./Task";

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
      <Task></Task>
    </div>
  );
};

export default Tickets;
