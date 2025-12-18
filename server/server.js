import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { config, validateConfig } from "./config/index.js";

dotenv.config();
validateConfig();

const app = express();
const PORT = config.port;

app.use(express.json());
app.use(cors({
    origin: config.cors.origin,
    credentials: config.cors.credentials,
}));
app.use(morgan(config.nodeEnv == "production" ? "combined" : "dev"));

app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        message: "",
        timestamp: new Date().toISOString(),
        environment: config.nodeEnv,
        version: "1.0.0"
    })
})

app.use((req, res, next) => {
    res.status(404).json({
        message: "Endpoint Not Found.",
        success: false
    });
});

app.use((err, req, res, next) => {
    console.error(`Internal Server Error: ${err}`);
    res.status(500).json({
        message: "Internal Server Error.",
        success: false
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`);
    console.log(`Frontend URL: ${config.frontend.url}`);
    console.log(`Database: ${config.db.name}@${config.db.host}`);
    console.log(`Started at: ${new Date().toISOString()}`);
});