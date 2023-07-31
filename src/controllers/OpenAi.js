import Service from "../utils/Service.js";
import { handleError } from '../utils/Function.js'
class OpenAi{
    static ChatCompletion = async(req, res)=>{
        try {
            await Service.openAIchatCompletion(req, res)
        } catch (error) {
            handleError(error, 500, res);
        }
    }
}

export default OpenAi;