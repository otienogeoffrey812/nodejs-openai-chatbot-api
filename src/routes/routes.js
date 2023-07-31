import express from "express";
import OpenAi from '../controllers/OpenAi.js'

const routes = express.Router();

routes.post("/chat-completion", 
OpenAi.ChatCompletion,
)



export default routes;