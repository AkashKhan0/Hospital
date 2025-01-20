import React from "react";

const Doctors = () => {
  return (
    <>
      <h1 className="text-2xl font-medium py-5">Find Doctors</h1>

      <div className="flex items-center justify-between gap-5 mb-5">
        <input
          type="text"
          name="doctor"
          placeholder="Search Doctor"
          className="w-full p-2 border rounded text-black"
          required
        />
        <select name="branch" className="w-full p-2 border rounded" required>
          <option value="">Choose Branch</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Gazipur">Gazipur</option>
          <option value="Narayanganj">Narayanganj</option>
          <option value="Manikganj">Manikganj</option>
          <option value="Munshiganj">Munshiganj</option>
        </select>
        <select
          name="speciality"
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Choose Speciality</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Neurology">Neurology</option>
          <option value="Pediatrics">Pediatrics</option>
          <option value="Orthopedics">Orthopedics</option>
          <option value="Dermatology">Dermatology</option>
        </select>
        <select name="day" className="w-full p-2 border rounded" required>
          <option value="">Search by Day</option>
          <option value="Cardiology">Everyday</option>
          <option value="Cardiology">Monday</option>
          <option value="Cardiology">Tuesday</option>
          <option value="Cardiology">Wednesday</option>
          <option value="Cardiology">Thursday</option>
          <option value="Cardiology">Friday</option>
          <option value="Cardiology">Saturday</option>
          <option value="Cardiology">Sunday</option>
        </select>
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-black rounded text-xl uppercase"
        >
          search
        </button>
      </div>
    </>
  );
};

export default Doctors;
