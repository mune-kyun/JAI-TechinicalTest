const userService = require("../service/user_service");

const register = async (req, res) => {
  const { username, password } = req.body;
  const newUsername = await userService.register(username, password);

  if (newUsername) res.send({ data: { username: newUsername } });
  else res.sendStatus(400);
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const data = await userService.login(username, password);

  res.send({ data });
};

module.exports = { login, register };
