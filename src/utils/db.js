const { MongoClient } = require('mongodb');

const uri =
  'mongodb+srv://vinaythakor5025:Vinay10@akshar.hl9y3.mongodb.net/?retryWrites=true&w=majority&appName=Akshar';
const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db('aksharDB'); // Changed to aksharDB
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

module.exports = { connectToDatabase, client };
