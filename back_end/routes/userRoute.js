const express = require("express");
const userController = require("../controllers/UserController.js");
// const AuthController = require("../controllers/AuthController.js");
const MiddlewareUserLogin = require('../middleware/middlewareUserLogin.js')

const userRouter = express.Router();

userRouter.get("/", userController.index);
userRouter.get("/:id", userController.show);
userRouter.post("/", userController.register);
// userRouter.get("/", MiddlewareUserLogin, userController.authenticateToken);
module.exports = userRouter;
