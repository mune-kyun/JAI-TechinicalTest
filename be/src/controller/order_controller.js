const orderService = require("../service/order_service");

const getOrder = async (req, res) => {
  const data = await orderService.getOrder();

  res.send({
    data,
  });
};

module.exports = { getOrder };
