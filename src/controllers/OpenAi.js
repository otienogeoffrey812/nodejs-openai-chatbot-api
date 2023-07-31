import Service from "../utils/Service.js";
import { handleError } from '../utils/Function.js'
import Joi from "joi";
class OpenAI{
    static ChatCompletion = async(req, res)=>{
        try {
            const schema = Joi.object({
                message : Joi.string().required(),
            })
        
            const result = schema.validate(req.body);
        
            if(result.error){
                res.status(400).send(result.error.details[0].message);
                return;
            }

            await Service.openAIchatCompletion(req, res)
        } catch (error) {
            handleError(error, 500, res);
        }
    }
}

export default OpenAI;