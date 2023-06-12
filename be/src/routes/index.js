const Router = require("express").Router;
const router = Router();

const userRouter = require("./user_routes");
const orderRouter = require("./order_routes");

router.use("/user", userRouter);
router.use("/order", orderRouter);

module.exports = router;
