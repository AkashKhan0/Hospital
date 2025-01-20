import React, { useState } from "react";
import axios from "axios";

const Appointment = () => {
  const [formData, setFormData] = useState({
    branch: "",
    speciality: "",
    doctor: "",
    comments: "",
    name: "",
    age: "",
    weight: "",
    phone: "",
    gender: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URL || "http://localhost:5000/api/patient",
        formData
      );
      setMessage(response.data.message);
      setFormData({
        branch: "",
        speciality: "",
        doctor: "",
        comments: "",
        name: "",
        age: "",
        weight: "",
        phone: "",
        gender: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("Error submitting form.");
    }
  };
  return (
    <>
      <div className="w-full">
        <div className="form w-full sm:w-3/4 md:w-2/3 py-10 m-auto">
          <h1 className="form_h1">Doctor Appointment</h1>
          <h1 className="text-center text-xl font-medium my-2">
            Appointment Date : January 20,2025
          </h1>
          <p className="text-sm font-light text-center mb-5">
            *** Advance Appointment booking is not available.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4 text-black">
            <select
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Choose Branch</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Gazipur">Gazipur</option>
              <option value="Narayanganj">Narayanganj</option>
              <option value="Manikganj">Manikganj</option>
              <option value="Munshiganj">Munshiganj</option>
            </select>
            <select
              name="speciality"
              value={formData.speciality}
              onChange={handleChange}
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
            <input
              type="text"
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              placeholder="Search Doctor"
              className="w-full p-2 border rounded text-black"
              required
            />
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              placeholder="Additional Comments"
              className="w-full p-2 border rounded text-black"
            ></textarea>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full p-2 border rounded text-black"
              required
            />
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Age"
              className="w-full p-2 border rounded text-black"
              required
            />
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleChange}
              placeholder="Weight"
              className="w-full p-2 border rounded text-black"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full p-2 border rounded text-black"
              required
            />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-2 border rounded text-black"
              required
            >
              <option value="">Choose Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-black rounded"
            >
              Submit
            </button>
          </form>
          {message && (
            <div className="mb-4 p-2 bg-green-100 text-green-800">
              {message}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Appointment;
