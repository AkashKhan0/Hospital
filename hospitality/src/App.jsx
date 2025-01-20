import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact.jsx";
import Appointment from "./pages/Appointment.jsx";
import Gallery from "./pages/Gallery.jsx";
import Doctors from "./pages/Doctors.jsx";
import Career from "./pages/Career.jsx";
import Portal from "./pages/Portal.jsx";

const App = () => {
  return (
    <>
      <div className="w-full">
        <Navbar />
        <div className="w-full px-5 sm:px-10 pages max-w-screen-xl m-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/career" element={<Career />} />
            <Route path="/portal" element={<Portal />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
