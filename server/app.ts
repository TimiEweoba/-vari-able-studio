import express from "express";
import cors from "cors";

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

export default app;
