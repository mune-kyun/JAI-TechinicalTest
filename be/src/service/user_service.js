const { prisma } = require("../utils/prisma");
const jwt = require("jsonwebtoken");

const register = async (username, password) => {
  const user = await prisma.jUser.findFirst({
    where: {
      username,
    },
  });

  if (user) return null;

  await prisma.jUser.create({
    data: {
      username,
      hashedPassword: password,
    },
  });

  return username;
};

const login = async (username, password) => {
  const user = await prisma.jUser.findFirst({
    where: {
      username,
      hashedPassword: password,
    },
  });

  if (!user) return null;

  const token = jwt.sign({ username }, "secret");

  return { token, username };
};

module.exports = { login, register };
