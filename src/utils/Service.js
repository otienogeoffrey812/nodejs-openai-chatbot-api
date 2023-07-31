import { Configuration, OpenAIApi } from "openai";
import { handleError } from '../utils/Function.js';
import dotenv from 'dotenv';
dotenv.config()

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

class Service{
    static async openAIchatCompletion(req, res){
        try {    
            const { message } = req.body;
        
            const completion = await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                // messages: [{"role": "system", "content": "You are a helpful assistant."}],
                messages: [{role: "user", content: message}],
            });
            return completion.data.choices[0].message;            
        } catch (error) {
            console.log("Error: ", error.response.data)
            handleError(error.response.data, error.response.status, res);
        }
    }
}

export default Service;