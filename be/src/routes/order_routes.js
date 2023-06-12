const Router = require("express").Router;
const router = Router();

const { getOrder } = require("../controller/order_controller");

router.get("", getOrder);

module.exports = router;
