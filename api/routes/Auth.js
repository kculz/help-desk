const router = require("express").Router();
const { AUTH } = require("../controllers/authController");

router.post('/login', AUTH.login);
router.post('/register', AUTH.register);

module.exports.AuthRoute = router;