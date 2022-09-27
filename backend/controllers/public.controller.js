const data = require("../data/data.json");

const publicController = {
  /* EXAMPLE ROUTE */
  example: async (req, res) => {
    res.status(200).json({ msg: "entró" });
  },
};

module.exports = publicController;
