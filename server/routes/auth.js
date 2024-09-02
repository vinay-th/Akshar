import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { MongoClient, ObjectId } from "mongodb";
import bcrypt from "bcrypt";
import { v4 } from "uuid";
import { setUser } from "../service/auth.js";

const router = express.Router();

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

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    const db = await connectToDatabase();
    const usersCollection = db.collection("users");

    const user = await usersCollection.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    //Creating an unique id for the logged in user and storing the user and id in the session.
    let sessionId = v4();
    setUser(sessionId, user);

    //Storing unique session id in cookies.
    res.cookie("uuid", sessionId);
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  try {
    const db = await connectToDatabase();
    const usersCollection = db.collection("users");

    //declining a request if email is already registed
    const user = await usersCollection.findOne({ email });
    if (user) {
      return res.status(401).json({ error: "Email Already registered." });
    }

    //Encrypting the user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    //Inserting into database
    await usersCollection.insertOne({ email, password: hashedPassword });

    return res.status(200).json({ message: "Registered successful" });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/check", async (req, res) => {
  const uniqueId = req.user.id;
  console.log("Received auth check request for uniqueId:", uniqueId);

  try {
    console.log("Attempting to connect to database");
    const db = await connectToDatabase();
    console.log("Connected to database");
    const usersCollection = db.collection("users");

    console.log("Attempting to find user");
    let user;
    if (uniqueId === "demo") {
      console.log("Searching for demo user");
      user = await usersCollection.findOne({ username: "demo" });
    } else {
      console.log("Searching for user with ObjectId:", uniqueId);
      user = await usersCollection.findOne({ _id: new ObjectId(uniqueId) });
    }

    console.log("User found:", JSON.stringify(user, null, 2));

    if (user && user.role === "teacher") {
      console.log("User is a teacher");
      res.json({ isTeacher: true });
    } else {
      console.log("User is not a teacher or not found");
      res.json({ isTeacher: false });
    }
  } catch (error) {
    console.error("Error checking user role:", error);
    console.error("Error stack:", error.stack);
    res.status(500).json({
      error: "Internal server error",
      details: error.message,
      stack: error.stack,
    });
  }
});

router.get("/users", async (req, res) => {
  try {
    const db = await connectToDatabase();
    const usersCollection = db.collection("users");
    const users = await usersCollection.find({}).toArray();
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res
      .status(500)
      .json({ error: "Internal server error", details: error.message });
  }
});

export default router;
