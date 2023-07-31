import express from "express";
import OpenAI from '../controllers/OpenAI.js'

const routes = express.Router();

routes.post("/chat-completion", 
OpenAI.ChatCompletion,
)



export default routes;