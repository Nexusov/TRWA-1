const Koa = require('koa');
const cors = require('@koa/cors');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const mysql = require('mysql2/promise');

const app = new Koa();
app.use(cors()); 
const router = new Router();

const dbConfig = {
	host: 'localhost',
	user: 'root',
	password: 'Demonart1991',
	database: 'laba',
};

let connection;
mysql
	.createConnection(dbConfig)
	.then((conn) => {
		connection = conn;
		console.log('MySQL connected');
	})
	.catch((err) => {
		console.error('Error connecting to MySQL', err);
		process.exit(1);
	});

router.get('/teachers', async (ctx) => {
	try {
		const [rows] = await connection.query('SELECT * FROM teachers');
		ctx.body = rows;
	} catch (err) {
		ctx.status = 500;
		ctx.body = { message: err.message };
	}
});

router.post('/teachers', async (ctx) => {
	try {
		const { name } = ctx.request.body;
		const [result] = await connection.query(
			'INSERT INTO teachers (name) VALUES (?)',
			[name]
		);
		const [newDoc] = await connection.query(
			'SELECT * FROM teachers WHERE id = ?',
			[result.insertId]
		);
		ctx.body = newDoc;
	} catch (err) {
		ctx.status = 500;
		ctx.body = { message: err.message };
	}
});


router.delete('/teachers/:id', async (ctx) => {
	try {
		const { id } = ctx.params;
		const [result] = await connection.query(
			'DELETE FROM teachers WHERE id = ?',
			[id]
		);
		if (result.affectedRows === 0) {
			ctx.status = 404;
			ctx.body = { message: 'Document not found' };
		} else {
			ctx.body = { message: 'Deleted' };
		}
	} catch (err) {
		ctx.status = 500;
		ctx.body = { message: err.message };
	}
});

app.use(bodyParser());
app.use(router.routes()).use(router.allowedMethods());

app.listen(3001, () => {
	console.log('Server running on http://localhost:3001');
});
