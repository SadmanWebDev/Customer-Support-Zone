import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faCircle } from "@fortawesome/free-solid-svg-icons";

const CustomerCard = ({ customer }) => {
  console.log(customer);
  return (
    <div className="card shadow-lg p-4 bg-white">
      <div className="flex justify-between">
        <h1 className="font-semibold text-lg">{customer.title}</h1>
        <span className="p-1 text-lg rounded-full bg-[#B9F8CF] text-[#02A53B]">
          <FontAwesomeIcon icon={faCircle} />
          Open
        </span>
      </div>
      <p className="font-medium text-gray-400 my-3">{customer.description}</p>
      <div className="flex justify-between font-medium text-gray-400">
        <div className="flex justify-start gap-5">
          <span>{customer.id}</span>
          <span className="text-red-500">{customer.priority}</span>
        </div>
        <div className="flex justify-end gap-5">
          <p>{customer.customer_name}</p>
          <p>
            <FontAwesomeIcon icon={faCalendarDays} />
            {customer.date}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
