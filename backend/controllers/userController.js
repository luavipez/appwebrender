const User = require("../models/User");

exports.getUsers = async (req, res) => res.json(await User.findAll());
exports.createUser = async (req, res) => res.json(await User.create(req.body));
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  await User.update(req.body, { where: { id } });
  res.json({ message: "User updated" });
};
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  await User.destroy({ where: { id } });
  res.json({ message: "User deleted" });
};
