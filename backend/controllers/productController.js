const Product = require("../models/Product");

exports.getProducts = async (req, res) => res.json(await Product.findAll());
exports.createProduct = async (req, res) => res.json(await Product.create(req.body));
exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  await Product.update(req.body, { where: { id } });
  res.json({ message: "Product updated" });
};
exports.deleteProduct = async (req, res) => {
  const { id } = req.params;
  await Product.destroy({ where: { id } });
  res.json({ message: "Product deleted" });
};
