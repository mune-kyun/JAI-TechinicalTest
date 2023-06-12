const Router = require("express").Router;
const router = Router();

const { login } = require("../controller/user_controller");

router.get("/login", login);

module.exports = router;
