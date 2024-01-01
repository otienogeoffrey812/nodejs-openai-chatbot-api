# Node.js OpenAI Chatbot API

## Description

This project is a chatbot implemented using the OpenAI GPT-3.5-turbo model. The chatbot is built on the Node.js platform, utilizing the Express framework for the server. The project also incorporates Joi for input validation and dotenv for managing environment variables.

## Technology and Stack

- **Node.js:** A JavaScript runtime for server-side development.
- **Express:** A web application framework for Node.js, providing a robust set of features for web and mobile applications.
- **OpenAI Chat Completion:** Utilizing the GPT-3.5-turbo model from OpenAI for natural language processing and conversation generation.
- **Joi:** A library for validating JavaScript objects, ensuring that input data adheres to specific criteria.
- **dotenv:** A zero-dependency module for loading environment variables from a .env file into process.env.

## Setup
1. **Clone and install dependencies**
- git clone https://github.com/otienogeoffrey812/nodejs-openai-chatbot-api
- cd nodejs-openai-chatbot-api
- npm install

2. **Environment variables** <br>
Create a .env file in the root of the project and add the following variables
- PORT=8005
- OPENAI_API_KEY='your_openai_api_key'


## API Endpoints

* POST http://localhost:8005/api/v1/chat-completion <br/> 
    {
    "message": "Hi ChatGPT, do amazing stuff"
    }

## Contributing
If you'd like to contribute to this project, please fork the repository and create a pull request.

## License
This repository is released under the MIT license. In short, this means you are free to use this
software in any personal, open-source or commercial projects.

