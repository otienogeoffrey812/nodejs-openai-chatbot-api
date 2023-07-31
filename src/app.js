import express from "express";
const app = express();
import routes from "./routes/routes.js"

app.use(express.json());

const baseUrl = "/api/v1";

app.use(baseUrl, routes);

export default app;