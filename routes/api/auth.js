const express = require("express");

const { controllerWrapper, validation } = require("../../middlewares");
const { joiSchema } = require("../../models/user");
const { auth: ctrl } = require("../../controllers");

const router = express.Router();
//  POST /api/auth/register
router.post(
  "/register",
  validation(joiSchema),
  controllerWrapper(ctrl.register)
);
//router.post("/signup", ctrl.register);

router.post("/login", validation(joiSchema), controllerWrapper(ctrl.login));
//  router.post("/signin", ctrl.login);

router.get("/logout", controllerWrapper(ctrl.logout));
//  router.get("/signout", ctrl.logout);

module.exports = router;
