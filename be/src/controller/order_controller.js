const orderService = require("../service/order_service");

const getOrder = async (req, res) => {
  const { user } = req;
  const data = await orderService.getOrder(user);

  res.send({
    data,
  });
};

module.exports = { getOrder };
