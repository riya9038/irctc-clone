import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LoginModal from "./components/LoginModal/LoginModal";
import Booking from "./components/Booking/Booking";
import Contact from "./components/Contact/Contact";
import TrainSearch from "./pages/TrainSearch/TrainSearch";
import TrainDetails from "./pages/TrainDetails/TrainDetails";

function App() {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/bookings" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/train-search" element={<TrainSearch />} />
          <Route path="/train-details/:id" element={<TrainDetails />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
