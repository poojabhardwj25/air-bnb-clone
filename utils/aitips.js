const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function getTravelTips(location, country) {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-lite" });
    
    const prompt = `Give 5 short travel tips for ${location}, ${country}. 
    Format as a simple numbered list. Keep each tip under 2 sentences.`;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
}

module.exports = getTravelTips;