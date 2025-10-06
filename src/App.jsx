import "./App.css";
import Banner from "./Components/Banner/Banner";
import Footer from "./Components/Footer/Footer";
import Tickets from "./Components/Main/Tickets";
import Navbar from "./Components/Navbar/Navbar";

const customersPromise = fetch("/customers.json").then((res) => res.json());

function App() {
  return (
    <div className="bg-gray-100">
      <Navbar></Navbar>
      <Banner></Banner>
      <Tickets customersPromise={customersPromise}></Tickets>
      <Footer></Footer>
    </div>
  );
}

export default App;
