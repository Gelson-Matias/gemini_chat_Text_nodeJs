require('dotenv').config();
const {GoogleGenerativeAI} =require('@google/generative-ai');
const getKey= new GoogleGenerativeAI (process.env.API_KEY);

const geminiPro=async()=>{
    // Create  your key on Gemini studio, you will your key, then, will creted value ENV.
    const model=getKey.getGenerativeModel({model:"gemini-pro"});
    const prompt= "What does mean ChatGPT";
    const getResult=await model.generateContent(prompt);
    const response=await getResult.response;
    const getText=response.text();
    console.log(getText);
}

geminiPro()
