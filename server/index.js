const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

const goalSchema = new mongoose.Schema({goal: String});
const Goal = mongoose.model('Goal', goalSchema);

app.post('/api/goals', async (req, res)=>{
    const { goal } = req.body;
    const newGoal = new Goal({ goal });
    await newGoal.save();
    res.status(201).json(newGoal);
})

app.listen('5000', ()=> console.log ('Server running on port 5000'));