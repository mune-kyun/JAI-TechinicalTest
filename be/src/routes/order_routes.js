const Router = require("express").Router;
const router = Router();

const { getOrder, createOrder } = require("../controller/order_controller");
const authenticateJWT = require("../middleware/authenticate_jwt");

router.use(authenticateJWT);
router.get("", getOrder);
router.post("", createOrder);

module.exports = router;
