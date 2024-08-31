import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';

const router = express.Router();

// Define your auth routes here
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    const db = await connectToDatabase();
    const usersCollection = db.collection('users');

    const user = await usersCollection.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Here you would typically generate a JWT token
    // For simplicity, we're just sending back a success message
    res.status(200).json({ message: 'Login successful', userId: user._id });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/register', (req, res) => {
  // Registration logic
});

router.get('/check/:uniqueId', async (req, res) => {
  const { uniqueId } = req.params;
  console.log('Received auth check request for uniqueId:', uniqueId);

  try {
    const db = await connectToDatabase();
    console.log('Connected to database');
    const usersCollection = db.collection('users');

    // Print all users in the collection
    const allUsers = await usersCollection.find({}).toArray();
    console.log('All users in the collection:', allUsers);

    let user;
    if (uniqueId === 'demo') {
      console.log('Searching for demo user');
      user = await usersCollection.findOne({ username: 'demo' });
    } else {
      console.log('Searching for user with ObjectId:', uniqueId);
      user = await usersCollection.findOne({ _id: new ObjectId(uniqueId) });
    }

    console.log('User found:', user);

    if (user && user.role === 'teacher') {
      console.log('User is a teacher');
      res.json({ isTeacher: true });
    } else {
      console.log('User is not a teacher or not found');
      res.json({ isTeacher: false });
    }
  } catch (error) {
    console.error('Error checking user role:', error);
    res
      .status(500)
      .json({ error: 'Internal server error', details: error.message });
  }
});

// Make sure to export the router as default
export default router;

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
