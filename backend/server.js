const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/yoga', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((e) => console.error("MongoDB connection error", e));

// User Schema and Model
const userSchema = new mongoose.Schema({
  name: { required: true, type: String },
  mobilenumber: { required: true, type: String },
  email: { required: true, unique: true, type: String },
  password: { required: true, type: String },
});

const UserModel = mongoose.model('User', userSchema);

// Appointment Schema and Model
const appointmentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  date: { type: Date, required: true },
  section: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String }
});

const AppointmentModel = mongoose.model('Appointment', appointmentSchema);

// API Endpoints

// Create Appointment
app.post('/createappointment', async (req, res) => {
  const { firstName, lastName, date, section, phoneNumber, email, message } = req.body;
  
  try {
    const newAppointment = new AppointmentModel({ 
      firstName, 
      lastName, 
      date, 
      section, 
      phoneNumber, 
      email, 
      message 
    });

    await newAppointment.save();
    res.status(201).send({ msg: "Appointment created successfully" });
  } catch (e) {
    console.error("Error creating appointment", e);
    res.status(500).send({ msg: "Server error", error: e });
  }
});

// Register User
app.post('/register', (req, res) => {
  const { name, mobilenumber, email, password } = req.body;
  const newUser = new UserModel({ name, mobilenumber, email, password });

  newUser.save()
    .then(() => res.status(201).send({ msg: "User registered successfully" }))
    .catch((e) => {
      console.error("Error registering user", e);
      if (e.code === 11000) {
        return res.status(400).send({ msg: "Email already exists" });
      }
      res.status(500).send({ msg: "Server error", error: e });
    });
});

// User Login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).send({ msg: "User not found" });
    }

    if (password !== user.password) {
      return res.status(400).send({ msg: "Invalid password" });
    }

    res.send({ msg: "Login successful" });
  } catch (e) {
    console.error("Login error", e);
    res.status(500).send({ msg: "Server error", error: e });
  }
});

// Forget Password
app.post('/forgetpassword', async (req, res) => {
  const { email, changePassword } = req.body;

  try {
    const user = await UserModel.findOneAndUpdate(
      { email },
      { password: changePassword },
      { new: true }
    );

    if (!user) {
      return res.status(400).send({ msg: "User not found" });
    }

    res.send({ msg: "Password updated successfully" });
  } catch (e) {
    console.error("Password update error", e);
    res.status(500).send({ msg: "Server error", error: e });
  }
});

// Start Server
const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
