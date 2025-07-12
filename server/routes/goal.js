const express = require('express');
const router = express.Router();
const { generateCoursePlan } = require('../utils/ollama');

router.post('/', async (req, res) => {
    const { goal } = req.body;
    try {
        const coursePlan = await generateCoursePlan(goal);
        const newGoal = new goal( { goal, coursePlan } );
        await newGoal.save();

        res.json({ goal,coursePlan});
    } catch (error) {
        console.error('Error generating course plan:', error);
        res.status(500).json({ error: 'Failed to generate course plan' });
    }
})

module.exports = router;