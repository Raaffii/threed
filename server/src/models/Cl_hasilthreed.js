const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://rafirabbani:rafisukses@portofolio.9hymj.mongodb.net/threed");

const Cl_hasilthreed = mongoose.model("hasil", {
  nama: {
    type: String,
  },
  tanggal: {
    type: String,
  },
});

module.exports = { Cl_hasilthreed };
