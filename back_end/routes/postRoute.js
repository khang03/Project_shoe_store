const express = require('express');
const postController = require('../controllers/PostController.js');
const postRouter = express.Router();



postRouter.get('/', postController.index);



module.exports = postRouter;