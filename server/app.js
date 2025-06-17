const express = require("express");
const cors = require("cors");

const routerThreed = require("./src/routes/Thereed.js");

const app = express();
app.use(express.json());
const port = 3000;

app.use(
  cors(
    cors({
      origin: "*", // Memungkinkan semua origin untuk mengakses API
    })
  )
);

app.get("/", (req, res) => {
  res.json("hello ZIPIY");
});

app.listen(port, () => {
  console.log("server berjalan di port 3000");
});

app.use("/threed", routerThreed);
