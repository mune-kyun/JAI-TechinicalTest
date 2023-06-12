const Router = require("express").Router;
const router = Router();

const { login } = require("../controller/user_controller");

router.post("/login", login);

module.exports = router;
