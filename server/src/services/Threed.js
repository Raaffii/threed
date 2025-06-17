const { Cl_hasilthreed } = require("../models/Cl_hasilthreed");

const getData = async () => {
  const data = await Cl_hasilthreed.find({});
  return data;
};

module.exports = { getData };
