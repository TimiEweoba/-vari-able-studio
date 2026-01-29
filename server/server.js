require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/db');


const PORT = process.env.PORT || 5000;

(
    async function start() {
        try {
            await connectDB();
            console.log('Database connected successfully from the server👍');

            app.listen(PORT, () => {
                console.log(`Server is running on port http://localhost:${PORT}`);
            });
        } catch (err) {
            console.log('Failed to connect to server👎', err.message);
            process.exit(1);
        }
    }
)();