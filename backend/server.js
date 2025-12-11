import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import bodyParser from 'body-parser';

import { connectDB } from './src/config/db.js';
import authRoutes from './src/routes/auth.route.js';
import itemsRoutes from './src/routes/items.route.js';
import errorHandler from './src/middleware/errorHandler.js';

// Load .env at the very top
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/items', itemsRoutes);

app.get('/', (req, res) => {
  res.send({ ok: true, message: 'Shopping List API' });
});

// Error handling middleware
app.use(errorHandler);

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
  });
}

// Start server function
const start = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error('MONGO_URI is not defined in .env');
    }

    await connectDB(process.env.MONGO_URI); // Connect to MongoDB
    console.log('Connected to MongoDB');

    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error('Error starting server:', error.message);
    process.exit(1);
  }
};

start();
