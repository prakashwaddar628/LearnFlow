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

app.get('/api/goals', async (req, res)=>{
    const goal = new Goal({goal: req.body.goal});
    await goal.save();
    res.status(201).json(goal);
})

app.listen('5000', ()=> console.log ('Server running on port 5000'));