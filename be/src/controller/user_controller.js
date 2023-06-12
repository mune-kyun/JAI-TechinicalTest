const userService = require("../service/user_service");

const register = async (req, res) => {
  res.send("login");
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const data = await userService.login(username, password);

  res.send({ data });
};

module.exports = { login };
