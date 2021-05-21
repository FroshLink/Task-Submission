const express = require("express");
const mongoose = require("mongoose");
const app = express();
const authenticationroutes = require("./routes/auth.js");

// endpoints to test
// http://localhost:8080/frosh/signup
// http://localhost:8080/frosh/signin
// http://localhost:8080/frosh/showdata


// db connection
mongoose
  .connect("mongodb://localhost:27017/frosh", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("CONNECTED TO DB");
  })
  .catch(() => {
    console.log("NOT CONNECTED TO DB");
  });

// middlewares
app.use(express.json());

// My Routes
app.use("/frosh", authenticationroutes);

const port = 8080;

// starting a server
app.listen(port, () => {
  console.log(`App is running at ${port}`);
});
