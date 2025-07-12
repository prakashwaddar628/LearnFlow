"use client";


import axios from 'axios';
import React, { useState } from 'react'

export default function GoalInput() {
    const [goal, setGoal] = useState('');

    const handleSubmit = async (e)=>{
        e.preventDefault();

        // Logic to handle goal submission
        const res = await axios.post("http://localhost:5000/api/goals", {goal})
        alert("Goal Saved: " + res.data.message);
        setGoal('');
    }
  return (
    <div>
      <form onSubmit={handleSubmit} className='p-4'>
        <label className='block mb-2 text-lg font-medium'>What do you want to learn?</label>
        <input 
          type="text" 
          value={goal} 
          onChange={(e) => setGoal(e.target.value)} 
          className='border p-2 w-full mb-4'
          placeholder="e.g. Learn Data Structures in Python"
        />
        <button type="submit" className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors cursor-pointer'>
        Generate Course Plan
        </button>
      </form>
    </div>
  )
}
