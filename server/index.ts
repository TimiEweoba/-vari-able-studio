import "dotenv/config";
import express from "express";
import cors from "cors";
import { registerRoutes } from "./routes";
import { createServer } from "http";

const app = express();

// Middlewares
app.use(cors({
    origin: ["http://localhost:5173", "http://0.0.0.0:5173", "http://localhost:5000"],
    credentials: true,
}));
app.use(express.json());

// Heartbeat route
app.get("/", (_req, res) => {
    res.json({
        status: "active",
        service: "veri—able studio API",
        timestamp: new Date().toISOString(),
        endpoints: ["/api/projects", "/api/contact", "/api/payments/initialize"]
    });
});

// Routes
const startServer = async () => {
    try {
        const server = await registerRoutes(app);

        const PORT = Number(process.env.PORT) || 5000;
        server.listen(PORT, "0.0.0.0", () => {
            console.log(`Server is running on port http://localhost:${PORT}`);
            console.log(`API routes registered successfully`);
        });
    } catch (err: any) {
        console.error('Failed to start server:', err.message);
        process.exit(1);
    }
};

startServer();
