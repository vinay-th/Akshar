import express from "express";
import { MongoClient, ObjectId } from "mongodb";
import multer from "multer";
import fs from "fs/promises";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

const uri = process.env.MONGODB_URI;
if (!uri) {
  console.error("MONGODB_URI is not set in the environment variables");
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
      console.log("Connected to MongoDB");
    }
    if (!db) {
      db = client.db("aksharDB");
    }
    return db;
  } catch (error) {
    console.error("Error connecting to database:", error);
    throw error;
  }
}

router.post("/save-svg", upload.single("image"), async (req, res) => {
  try {
    const uniqueId = req.user.id;
    const { title } = req.body;
    const svgBuffer = req.file.buffer.toString("utf-8");

    const database = await connectToDatabase();
    const collection = database.collection("svgs");

    const result = await collection.insertOne({
      uniqueId,
      title,
      svg: svgBuffer,
      createdAt: new Date(),
    });

    res
      .status(200)
      .json({ message: "SVG saved successfully", id: result.insertedId });
  } catch (error) {
    console.error("Error saving SVG:", error);
    res
      .status(500)
      .json({ message: "Failed to save SVG", error: error.message });
  }
});

router.post("/save-png", upload.single("image"), async (req, res) => {
  console.log("Save PNG route hit", req.params, req.body);
  const uniqueId = req.user.id;
  const { title } = req.body;
  const image = req.file;

  console.log("Received save-png request for uniqueId:", uniqueId);
  console.log("Title:", title);

  if (!image || !title) {
    console.log("Missing PNG data or title");
    return res.status(400).json({ error: "PNG data and title are required" });
  }

  try {
    const database = await connectToDatabase();
    let user = req.user;

    if (!user || user.role !== "teacher") {
      console.log("Unauthorized: User not found or not a teacher");
      return res.status(403).json({ error: "Unauthorized" });
    }

    const pngsCollection = database.collection("pngs");
    const result = await pngsCollection.insertOne({
      userId: uniqueId,
      title: title,
      pngData: image.buffer,
      createdAt: new Date(),
    });

    console.log("PNG saved successfully");
    res
      .status(200)
      .json({ message: "PNG saved successfully", id: result.insertedId });
  } catch (error) {
    console.error("Error saving PNG to database:", error);
    res.status(500).json({
      error: "Failed to save PNG",
      details: error.message,
      stack: error.stack,
    });
  }
});

router.get("/get-svg/:id", async (req, res) => {
  try {
    const database = await connectToDatabase();
    const collection = database.collection("svgs");

    const result = await collection.findOne({
      _id: new ObjectId(req.params.id),
    });

    if (!result) {
      return res.status(404).json({ error: "SVG not found" });
    }

    res.contentType("image/svg+xml");
    res.send(result.svg);
  } catch (error) {
    console.error("Error retrieving SVG:", error);
    res.status(500).json({ error: "Failed to retrieve SVG" });
  }
});

export default router;
