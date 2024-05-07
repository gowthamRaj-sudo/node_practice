// imports the modules
const express = require("express");
require("dotenv").config();

// server initized
const app = express();
// port
const port = process.env.SERVER_PORT;
// initial route
app.get("/", (req, res) => {
  res.send({ message: "Application initiazied !" });
});

app.listen(port, () => {
  console.log("Application run on =====>", port);
});
