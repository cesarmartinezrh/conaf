const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();
const pool = require("./db")

const port = process.env.PORT;

app.use(express.static(path.join(__dirname, "build")));

app.get('/ping', async(req, res) => {
	const [result] = await pool.query('SELECT 1+1 as result')
	res.json(result)
})

app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "build", "index.html"), function (err) {
		if (err) {
			res.status(500).send(err);
		}
	});
});

app.listen(port, () => {
	console.log(`This is running at port: ${port}`);
});
