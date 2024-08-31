import express from 'express';
import { MongoClient } from 'mongodb';
import whiteboardRoutes from './routes/whiteboard.js';
import cors from 'cors';

const app = express();

const uri =
  'mongodb+srv://vinaythakor5025:Vinay10@akshar.hl9y3.mongodb.net/?retryWrites=true&w=majority&appName=Akshar';
const client = new MongoClient(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

app.use(cors());
app.use(express.json());

app.use('/api/whiteboard', whiteboardRoutes);

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
