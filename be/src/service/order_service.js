const { prisma } = require("../utils/prisma");

const getOrder = async (user) => {
  const orders = await prisma.order.findMany({
    where: {
      user,
    },
    select: {
      id: true,
      productName: true,
      productQuantity: true,
      productPrice: true,
    },
    orderBy: {
      date: "asc",
    },
  });
  return orders;
};

module.exports = { getOrder };
