const Fastify = require('fastify');
const fastifyCors = require('@fastify/cors');
const { MongoClient, ObjectID, ObjectId, ServerApiVersion } = require('mongodb');

const fastify = Fastify({ logger: true });

const uri =
	'mongodb+srv://admin:Demonart1991@blogportal.og5rgfo.mongodb.net/?retryWrites=true&w=majority';
let db;

const client = new MongoClient(uri, {
	serverApi: ServerApiVersion.v1,
});

fastify.register(fastifyCors, {
  origin: (origin, cb) => {
    const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175'];
    if (allowedOrigins.includes(origin)) {
      cb(null, true);
    } else {
      cb(new Error("Not allowed by CORS"));
    }
  }
});


async function run() {
	try {
		await client.connect();
		db = client.db('BlogPortal');
		fastify.log.info('MongoDB connected');

		fastify.get('/laba', async (request, reply) => {
			const laba = await db.collection('laba').find({}).toArray();
			return laba;
		});

    fastify.post('/laba', async (request, reply) => {
      try {
        const result = await db.collection('laba').insertOne(request.body);
        if (result.acknowledged && result.insertedId) {
          const newDoc = await db.collection('laba').findOne({ _id: result.insertedId });
          return reply.send(newDoc);
        } else {
          return reply.status(500).send({ message: "Document not added" });
        }
      } catch (error) {
        return reply.status(500).send({ message: error.message });
      }
    });

    fastify.delete('/laba/:id', async (request, reply) => {
      try {
        const { id } = request.params;
        const result = await db.collection('laba').deleteOne({ _id: new ObjectId(id) });
        if (result.deletedCount === 0) {
          return reply.status(404).send({ message: 'Document not found' });
        }
        return reply.send({ message: 'Deleted' });
      } catch (error) {
        return reply.status(500).send({ message: error.message });
      }
    });

		await fastify.listen({ port: 3000 });
		fastify.log.info(
			`Server listening on ${fastify.server.address().port}`
		);
	} catch (err) {
		fastify.log.error(err);
		process.exit(1);
	}
}

run().catch(console.dir);
