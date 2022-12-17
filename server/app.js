const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const cors = require("cors");
require("dotenv").config();
const pool = require("./db");

const port = process.env.PORT;

app.use(express.static(path.join(__dirname, "../build")));
app.use(cors());
app.use(bodyParser.json());

app.post("/survey", (req, res) => {
  let data = req.body;
  let sql = "INSERT INTO survey SET ?";
  let query = pool.query(sql, data, (err, results) => {
    if (err) throw err;
  });
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(port, () => {
  console.log(`This is running at port: ${port}`);
});
