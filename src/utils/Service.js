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
                messages: [{role: "user", content: message}],
            });

            res.status(200).send({
                "message": message,
                "response": completion.data.choices[0].message,
            });           
        } catch (error) {
            handleError(error.response.data, error.response.status, res);
        }
    }
}

export default Service;