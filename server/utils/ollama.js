const axios = require('axios');

async function generateCoursePlan(goal) {
    const prompt = `
    Generate a detailed, beginner-friendly 4- week learning plan for a course on "${goal}".
    Break down by week, including topics, estimated hours, and youtube search keywords.
    format it cleanly as markdown.
    `;

  const response = await axios.post('http://localhost:11434/api/generate', {
    model: 'mistral',
    prompt,
    stream: false,
  });
  return response.data.response;
}

module.exports = { generateCoursePlan };