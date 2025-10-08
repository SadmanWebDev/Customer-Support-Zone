import React, { use } from "react";
import TicketCard from "../Ticket Card/TicketCard";
import Task from "../Task/Task";

const TicketContainer = ({
  tasks,
  customersPromise,
  handleCard,
  taskStatus,
  handleResolved,
  resolvedTask,
}) => {
  const customersData = use(customersPromise);

  return (
    <div className="flex flex-col md:flex-row max-w-11/12 mx-auto gap-5">
      <div>
        <h1 className="font-semibold text-2xl mb-3">Customer Tickets</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {tasks.map((customer) => (
            <TicketCard
              key={customer.id}
              handleCard={handleCard}
              customer={customer}
            ></TicketCard>
          ))}
        </div>
      </div>
      <Task
        taskStatus={taskStatus}
        handleResolved={handleResolved}
        resolvedTask={resolvedTask}
      ></Task>
    </div>
  );
};

export default TicketContainer;
