import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import TicketCards from "./Components/TicketCards/TicketCards";

const customersPromise = fetch("/customers.json").then((res) => res.json());

function App() {
  const [taskStatus, setTaskStatus] = useState([]);

  const handleCard = (customer) => {
    const newTaskStatus = [...taskStatus, customer];
    setTaskStatus(newTaskStatus);
    // console.log(customer);
  };
  console.log(taskStatus);
  return (
    <div className="bg-gray-100">
      <Navbar></Navbar>
      <Banner inprogress={taskStatus.length}></Banner>
      <Suspense
        fallback={
          <span className="loading loading-spinner text-primary"></span>
        }
      >
        <TicketCards
          handleCard={handleCard}
          customersPromise={customersPromise}
          taskStatus={taskStatus}
        ></TicketCards>
      </Suspense>
      <Footer></Footer>
    </div>
  );
}

export default App;
