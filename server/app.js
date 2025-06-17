const express = require("express");
const cors = require("cors");

const routerThreed = require("./src/routes/Thereed.js");

const app = express();
app.use(express.json());
const port = 3000;

app.use(cors());

app.listen(port, () => {
  console.log("server berjalan di port 3000");
});

app.use("/threed", routerThreed);
