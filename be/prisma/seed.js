const { prisma } = require("../src/utils/prisma");

const users = [
  {
    username: "test",
    hashedPassword: "test",
  },
  {
    username: "test2",
    hashedPassword: "test2",
  },
];

async function main() {
  await prisma.jUser.createMany({
    data: users,
  });
  console.log("done creating dummy user");
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
