const getProduct = (req, res) => {
  res.send({
    name: "Table",
    description: "Nice table",
  });
};
module.exports = {
  getProduct: getProduct,
};
