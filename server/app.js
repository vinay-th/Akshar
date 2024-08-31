import express from 'express';
import { MongoClient } from 'mongodb';
import whiteboardRoutes from './routes/whiteboard.js';
import authRoutes from './routes/auth.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

// Remove this line if it exists:
// app.use(upload.none());

app.use('/api/whiteboard', whiteboardRoutes);
app.use('/api/auth', authRoutes);

// Add this after your other routes
app.use('*', (req, res) => {
  console.log('Unmatched route:', req.method, req.originalUrl);
  res.status(404).json({ error: 'Not Found' });
});

// Initialize your client
const uri =
  'mongodb+srv://vinaythakor5025:Vinay10@akshar.hl9y3.mongodb.net/?retryWrites=true&w=majority&appName=Akshar'; // Replace with your actual MongoDB URI
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function startServer() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

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
