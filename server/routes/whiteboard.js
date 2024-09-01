import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import multer from 'multer';
import fs from 'fs/promises';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error('MONGODB_URI is not set in the environment variables');
  process.exit(1);
}

let client;
let db;

async function connectToDatabase() {
  try {
    if (!client) {
      client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
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
    const database = await connectToDatabase();
    const collection = database.collection('svgs');

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
      stack: error.stack,
    });
  }
});

router.post('/:uniqueId/save-svg', async (req, res) => {
  console.log('Save SVG route hit', req.params, req.body);
  const { uniqueId } = req.params;
  const { title, svgData } = req.body;

  console.log('Received save-svg request for uniqueId:', uniqueId);
  console.log('Title:', title);

  if (!svgData || !title) {
    console.log('Missing SVG data or title');
    return res.status(400).json({ error: 'SVG data and title are required' });
  }

  try {
    const database = await connectToDatabase();
    const usersCollection = database.collection('users');
    let user;

    if (uniqueId === 'demo') {
      user = await usersCollection.findOne({ username: 'demo' });
    } else {
      user = await usersCollection.findOne({ _id: new ObjectId(uniqueId) });
    }

    if (!user || user.role !== 'teacher') {
      console.log('Unauthorized: User not found or not a teacher');
      return res.status(403).json({ error: 'Unauthorized' });
    }

    const svgsCollection = database.collection('svgs');
    const result = await svgsCollection.insertOne({
      userId: uniqueId === 'demo' ? 'demo' : new ObjectId(uniqueId),
      title: title,
      svgData: svgData,
      createdAt: new Date(),
    });

    console.log('SVG saved successfully');
    res
      .status(200)
      .json({ message: 'SVG saved successfully', id: result.insertedId });
  } catch (error) {
    console.error('Error saving SVG to database:', error);
    res.status(500).json({
      error: 'Failed to save SVG',
      details: error.message,
      stack: error.stack,
    });
  }
});

router.get('/get-svg/:id', async (req, res) => {
  try {
    const database = await connectToDatabase();
    const collection = database.collection('svgs');

    const result = await collection.findOne({
      _id: new ObjectId(req.params.id),
    });

    if (!result) {
      return res.status(404).json({ error: 'SVG not found' });
    }

    res.contentType('image/svg+xml');
    res.send(result.svgData);
  } catch (error) {
    console.error('Error retrieving SVG:', error);
    res.status(500).json({ error: 'Failed to retrieve SVG' });
  }
});

export default router;
