require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

console.log("MongoDB URI: ", process.env.MONGODB_URI);

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

// Patient Schema
const patientSchema = new mongoose.Schema({
  branch: { type: String, required: true },
  speciality: { type: String, required: true },
  doctor: { type: String, required: true },
  comments: { type: String },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  weight: { type: Number, required: true },
  phone: { type: String, required: true },
  gender: { type: String, required: true },
});

const Patient = mongoose.model("Patient", patientSchema);

// Routes
// Route to create a new patient
app.post("/api/patient", async (req, res) => {
  try {
    const {
      branch,
      speciality,
      doctor,
      comments,
      name,
      age,
      weight,
      phone,
      gender,
    } = req.body;
    const patient = new Patient({
      branch,
      speciality,
      doctor,
      comments,
      name,
      age,
      weight,
      phone,
      gender,
    });
    await patient.save();
    res.status(201).json({ message: "Patient data saved successfully" });
  } catch (error) {
    console.error("Error saving patient:", error.message);
    res.status(500).json({ message: "Error saving patient data", error });
  }
});

// Route to fetch all patients
app.get("/api/patients", async (req, res) => {
  try {
    const patients = await Patient.find(); // Fetch all patients
    res.json(patients);
  } catch (error) {
    res.status(500).json({ message: "Error fetching patient data", error });
  }
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
