const express = require("express");
const postController = require("../controllers/PostController.js");
// const likeController = require("../controllers/LikeController.js");
const postRouter = express.Router();

postRouter.get("/", postController.index);
postRouter.get("/:id", postController.show);
// postRouter.get("/like", likeController.like);

module.exports = postRouter;
