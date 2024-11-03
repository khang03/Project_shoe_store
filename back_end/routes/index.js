const commentRouter = require("./commentRoute.js");
const postRoute = require("./postRoute.js");
const userRoute = require("./userRoute.js");
const imageRouter = require("./imageRouter.js");
const likeRouter = require("./likeRouter.js");
// const authRouter = require('./authRouter.js')

// init Routes for all route
function Routes(app) {
  app.use("/posts", postRoute);
  app.use("/users", userRoute);
  app.use("/comments", commentRouter);
  app.use("/images", imageRouter);
  app.use("/likes", likeRouter);
  // app.use('/auth', authRouter)
}

module.exports = Routes;
