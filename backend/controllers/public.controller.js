const publicController = {
  /* EXAMPLE ROUTE */
  example: async (req, res) => {
    res.status(200).send({ msg: "Example route" });
  },
};

module.exports = publicController;
