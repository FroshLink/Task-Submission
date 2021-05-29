const express = require("express");
const bcrypt = require("bcrypt");
const app = express();
const cors = require("cors");
const ObjectID = require("mongodb").ObjectID;
require("dotenv").config();
app.use(cors());
app.use(express.json());

const MongoClient = require("mongodb").MongoClient;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jzyej.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const userCollection = client
    .db(`${process.env.DB_NAME}`)
    .collection("users");
  app.post("/registration", async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const name = req.body.name;
      const email = req.body.email;
      const password = hashedPassword;

      await userCollection.insertOne({ name, email, password });
      res.send("successfully registered");
    } catch {
      res.send("There is an error");
    }
  });
  app.post("/login", (req, res) => {
    userCollection
      .find({ email: req.body.email })
      .toArray(async (err, documents) => {
        if (documents.length > 0) {
          const isValidPassword = await bcrypt.compare(
            req.body.password,
            documents[0].password
          );
          if (isValidPassword) {
            res.send("Login successful");
          } else {
            res.send("authentication failed");
          }
        }
      });
  });
  console.log("connected database");
});

app.get("/", function (req, res) {
  res.send("hello World");
});

app.listen(process.env.PORT || 5000);
