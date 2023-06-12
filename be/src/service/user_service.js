const { prisma } = require("../utils/prisma");
const jwt = require("jsonwebtoken");

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

module.exports = { login };
