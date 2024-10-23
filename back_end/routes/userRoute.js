const express = require('express');
const userController = require('../controllers/UserController.js');
const userRouter = express.Router();


userRouter.get('/', userController.index);
userRouter.get('/:id', userController.show);
userRouter.post('/store', userController.store);



module.exports = userRouter;