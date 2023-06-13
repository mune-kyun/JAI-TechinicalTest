const Router = require("express").Router;
const router = Router();

const { login, register } = require("../controller/user_controller");

router.post("/login", login);
router.post("/register", register);

module.exports = router;
