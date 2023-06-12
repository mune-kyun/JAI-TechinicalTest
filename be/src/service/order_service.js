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
      date: "desc",
    },
  });
  return orders;
};

const createOrder = async (user, data) => {
  const { name, quantity, price } = data;
  const order = await prisma.order.create({
    data: {
      productName: name,
      productQuantity: quantity,
      productPrice: price,
      user: {
        connect: {
          id: user.id,
        },
      },
    },
  });
  return order;
};

module.exports = { getOrder, createOrder };
