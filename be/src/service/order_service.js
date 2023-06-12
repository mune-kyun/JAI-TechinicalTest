const { prisma } = require("../utils/prisma");

const getOrder = async () => {
  const orders = await prisma.order.findMany({
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
