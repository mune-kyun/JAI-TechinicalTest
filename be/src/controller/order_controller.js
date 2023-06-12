const orderService = require("../service/order_service");

const getOrder = async (req, res) => {
  const { user } = req;
  const orders = await orderService.getOrder(user);

  res.send({
    data: orders,
  });
};

const createOrder = async (req, res) => {
  const { user } = req;
  const { data } = req.body;
  const order = await orderService.createOrder(user, data);

  res.send({
    data: order,
  });
};

module.exports = { getOrder, createOrder };
