import { Configuration, OpenAIApi } from "openai";
import dotenv from 'dotenv';
dotenv.config()

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

class Service{
    static async openAIchatCompletion(message){
        try {            
            const completion = await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                // messages: [{"role": "system", "content": "You are a helpful assistant."}],
                messages: [{role: "user", content: message}],
            });
            return completion.data.choices[0].message;            
        } catch (error) {
            console.log("Error: ", error.response)
            return error.response;
        }
    }
}

export default Service;