import Service from "../utils/Service.js";
class OpenAi{
    static ChatCompletion = async(req, res)=>{
        try {
            await Service.openAIchatCompletion("Hello World")
        } catch (error) {
            
        }
    }
}

export default OpenAi;