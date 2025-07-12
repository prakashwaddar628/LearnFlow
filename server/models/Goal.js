const mongoose = require('mongoose');

const getSchema = new mongoose.Schema({
    goal : String,
    coursePlan: String
})

const Goal = mongoose.model('Goal', getSchema);
module.exports = Goal;