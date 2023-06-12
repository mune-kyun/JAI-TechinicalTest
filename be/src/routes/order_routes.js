const Router = require("express").Router;
const router = Router();

const { getOrder } = require("../controller/order_controller");
const authenticateJWT = require("../middleware/authenticate_jwt");

router.use(authenticateJWT);
router.get("", getOrder);

module.exports = router;
