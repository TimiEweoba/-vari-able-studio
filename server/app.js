const express = require('express');
const cors = require('cors');
const paymentRoutes = require('./routes/paymentRoutes');

const app = express();

// middlewares
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,
}));

app.use(express.json());

// routes
app.use('/api/payments', paymentRoutes);
app.get('/', (req, res) => {
  res.send('API is running...');
});

module.exports = app;