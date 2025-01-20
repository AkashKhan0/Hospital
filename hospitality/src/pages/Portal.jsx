import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const Portal = () => {
  return (
    <>
      <h1 className="text-2xl font-medium py-5 mb-5">Patient Portals</h1>
      <div className="mb-5">
        <input
          type="text"
          name="doctor"
          placeholder="Search Patient Portals"
          className="w-full p-2 border rounded text-black"
          required
        />
      </div>
      <h1 className="text-2xl font-medium py-5 mb-5 flex items-center gap-2">
        <FaLocationDot /> Inside Dhaka
      </h1>
      <div className="grid grid-cols-4 gap-8 inside_dhaka mb-10">
        <h1>badda</h1>
        <h1>Dhanmondi</h1>
        <h1>english road</h1>
        <h1>Gazipur</h1>
        <h1>jatrabari</h1>
        <h1>mirpur</h1>
        <h1>Narayanganj</h1>
        <h1>savar</h1>
        <h1>santi nagar</h1>
        <h1>shyamoli</h1>
        <h1>uttara</h1>
      </div>
    </>
  );
};

export default Portal;
