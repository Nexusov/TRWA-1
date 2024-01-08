const express = require('express');
const cors = require('cors');
const { MongoClient, ObjectId } = require('mongodb');

const app = express();
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175']
}));

const uri = 'mongodb+srv://admin:Demonart1991@blogportal.og5rgfo.mongodb.net/?retryWrites=true&w=majority';
let db;

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    db = client.db('BlogPortal');
    console.log('MongoDB connected');

    app.get('/groups', async (req, res) => {
      try {
        const groups = await db.collection('groups').find({}).toArray();
        res.json(groups);
      } catch (error) {
        res.status(500).send({ message: error.message });
      }
    });

    app.post('/groups', async (req, res) => {
      try {
        const result = await db.collection('groups').insertOne(req.body);
        if (result.acknowledged && result.insertedId) {
          const newDoc = await db.collection('groups').findOne({ _id: result.insertedId });
          res.json(newDoc);
        } else {
          res.status(500).send({ message: "Document not added" });
        }
      } catch (error) {
        res.status(500).send({ message: error.message });
      }
    });

    app.delete('/groups/:id', async (req, res) => {
      try {
        const { id } = req.params;
        const result = await db.collection('groups').deleteOne({ _id: new ObjectId(id) });
        if (result.deletedCount === 0) {
          res.status(404).send({ message: 'Document not found' });
        } else {
          res.send({ message: 'Deleted' });
        }
      } catch (error) {
        res.status(500).send({ message: error.message });
      }
    });

    app.listen(3002, () => {
      console.log('Server is running on port 3002');
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

run().catch(console.dir);
