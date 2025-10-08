import { Suspense, use, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import TicketContainer from "./Components/Ticket Container/TIcketContainer";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

const customersPromise = fetch("/customers.json").then((res) => res.json());

function App() {
  const data = use(customersPromise);
  const [tasks, setTasks] = useState(data);
  const [taskStatus, setTaskStatus] = useState([]);
  const [resolvedTask, setResolvedTask] = useState([]);

  const handleCard = (customer) => {
    const isExist = taskStatus.find((item) => item.id == customer.id);

    if (isExist) {
      toast.warning("Ticket is Already In-Progress");
      return;
    }
    toast.success("Ticket is In-Progress");
    const newTaskStatus = [...taskStatus, customer];
    setTaskStatus(newTaskStatus);
  };

  const handleResolved = (customer) => {
    const NewResolvedTask = [...resolvedTask, customer];
    setResolvedTask(NewResolvedTask);
    toast.success("Task Resolved!");
    const remaining = taskStatus.filter((task) => task.id !== customer.id);
    setTaskStatus(remaining);

    const remainingTask = tasks.filter((task) => task.id !== customer.id);
    setTasks(remainingTask);
  };

  return (
    <div className="bg-gray-100">
      <Navbar></Navbar>
      <Banner
        inProgress={taskStatus.length}
        resolved={resolvedTask.length}
      ></Banner>
      <Suspense
        fallback={
          <span className="loading loading-spinner text-primary"></span>
        }
      >
        <TicketContainer
          tasks={tasks}
          handleCard={handleCard}
          handleResolved={handleResolved}
          customersPromise={customersPromise}
          taskStatus={taskStatus}
          resolvedTask={resolvedTask}
        ></TicketContainer>
      </Suspense>
      <Footer></Footer>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
