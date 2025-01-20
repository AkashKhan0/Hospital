import React, { useState, useEffect } from "react";
import axios from "axios";

const Gallery = () => {
  const [patients, setPatients] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch patient data from the backend
    const fetchPatients = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/patients");
        setPatients(response.data); // Store the fetched data in state
      } catch (error) {
        console.error("Error fetching patient data:", error);
        setMessage("Error fetching patient data.");
      }
    };

    fetchPatients();
  }, []);

  return (
    <div className="w-full py-10">
      <h1 className="text-center text-xl font-medium mb-5">Patient Gallery</h1>
      {message && (
        <div className="mb-4 p-2 bg-red-100 text-red-800">{message}</div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {patients.length > 0 ? (
          patients.map((patient) => (
            <div
              key={patient._id}
              className="bg-white p-4 border rounded shadow-lg"
            >
              <h3 className="text-lg font-semibold">
                <strong>Patient name : </strong>
                {patient.name}
              </h3>
              <p>
                <strong>Branch:</strong> {patient.branch}
              </p>
              <p>
                <strong>Speciality:</strong> {patient.speciality}
              </p>
              <p>
                <strong>Doctor:</strong> {patient.doctor}
              </p>
              <p>
                <strong>Age:</strong> {patient.age}
              </p>
              <p>
                <strong>Weight:</strong> {patient.weight}
              </p>
              <p>
                <strong>Phone:</strong> {patient.phone}
              </p>
              <p>
                <strong>Gender:</strong> {patient.gender}
              </p>
              <p>
                <strong>Comments:</strong> {patient.comments}
              </p>
            </div>
          ))
        ) : (
          <p>No patients available.</p>
        )}
      </div>
    </div>
  );
};

export default Gallery;
