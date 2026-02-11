import "dotenv/config";
import app from "./app";
import { registerRoutes } from "./routes";

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

