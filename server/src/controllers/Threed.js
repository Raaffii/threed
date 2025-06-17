const { getData } = require("../services/Threed.js");

const getHasil = async (req, res) => {
  const data = await getData();

  res.status(200).json({ data });
};

module.exports = { getHasil };
