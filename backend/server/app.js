import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { MongoClient } from 'mongodb';
import whiteboardRoutes from './routes/whiteboard.js';
import authRoutes from './routes/auth.js';
import cors from 'cors';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:5173', // or whatever your frontend URL is
    credentials: true,
  })
);

app.use(express.json());

app.use('/api/whiteboard', whiteboardRoutes);
app.use('/api/auth', authRoutes);

app.use('*', (req, res) => {
  console.log('Unmatched route:', req.method, req.originalUrl);
  res.status(404).json({ error: 'Not Found' });
});

app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  console.error('Error stack:', err.stack);
  res.status(500).json({
    error: 'Internal server error',
    details: err.message,
    stack: err.stack,
  });
});

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error('MONGODB_URI is not set in the environment variables');
  process.exit(1);
}

const client = new MongoClient(uri);

console.log('MONGODB_URI connected');

async function startServer() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const adminDb = client.db('admin');
    const result = await adminDb.command({ ping: 1 });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    );

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`API server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();

export default app;
