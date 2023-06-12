const jwt = require("jsonwebtoken");
const { Secret } = require("jsonwebtoken");
const { prisma } = require("../utils/prisma");

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  try {
    jwt.verify(token, "secret", async (err, payload) => {
      if (err) return res.sendStatus(403);
      else {
        const { username } = payload;

        const user = await prisma.jUser.findFirst({
          where: {
            username,
          },
        });

        if (!user) return res.sendStatus(403);
        else {
          req.user = user;
          next();
        }
      }
    });
  } catch (error) {}
};

module.exports = authenticateJWT;
