const express = require("express");
const cors = require("cors");

const routerThreed = require("./src/routes/Thereed.js");

const app = express();
const port = 3000;

// Middleware
app.use(cors({ origin: "*" }));
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.json("hello ZIPIYs");
});

app.use("/threed", routerThreed);

// Start Server
app.listen(port, () => {
  console.log("server berjalan di port 3000");
});
