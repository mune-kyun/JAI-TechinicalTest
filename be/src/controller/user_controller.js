const userService = require("../service/user_service");

const register = async (req, res) => {
  res.send("login");
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const token = await userService.login(username, password);

  res.send({ token });
};

module.exports = { login };
