import express from 'express';
import { MongoClient } from 'mongodb';

const router = express.Router();

const uri =
  'mongodb+srv://vinaythakor5025:Vinay10@akshar.hl9y3.mongodb.net/?retryWrites=true&w=majority&appName=Akshar';
let client;
let db;

async function connectToDatabase() {
  try {
    if (!client) {
      client = new MongoClient(uri, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      });
      await client.connect();
      console.log('Connected to MongoDB');
    }
    if (!db) {
      db = client.db('aksharDB');
    }
    return db;
  } catch (error) {
    console.error('Error connecting to database:', error);
    throw error;
  }
}

router.post('/save-svg', async (req, res) => {
  console.log('Received save-svg request');
  const { svgData } = req.body;

  if (!svgData) {
    console.log('SVG data is missing');
    return res.status(400).json({ error: 'SVG data is required' });
  }

  try {
    console.log('Connecting to database...');
    const database = await connectToDatabase();
    console.log('Connected to database');

    const collection = database.collection('svgs');

    console.log('Inserting SVG data...');
    console.log('SVG data length:', svgData.length);
    console.log('SVG data preview:', svgData.substring(0, 100));

    const result = await collection.insertOne({
      svgData: svgData,
      createdAt: new Date(),
    });

    console.log('SVG data inserted successfully');
    res
      .status(200)
      .json({ message: 'SVG saved successfully', id: result.insertedId });
  } catch (error) {
    console.error('Error saving SVG to database:', error);
    res.status(500).json({
      error: 'Failed to save SVG',
      details: error.message,
      name: error.name,
      stack: error.stack,
    });
  }
});

export default router;
