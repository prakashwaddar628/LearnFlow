const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

//middleware
app.use(cors());
app.use(express.json());

// monongoDB connection
mongoose.connect(process.env.MONGO_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

const goalRoutes = require('./routes/goal');
app.use('/api/goals', goalRoutes);

app.listen('5000', ()=> console.log ('Server running on port 5000'));