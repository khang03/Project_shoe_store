// import Model
const { where } = require("sequelize");
const dbModel = require("../models");

class LikeController {
  // [POST] xử lí like
  show(req, res) {
    dbModel.Like.findAll()
      .then((likes) => res.json(likes))
      .catch((err) => res.status(500).json(err));
  }

  //Thêm like
  addLike(req, res) {
    const { user_id, post_id } = req.body;
    dbModel.Like.create({ user_id, post_id })
      .then((likes) => res.json(likes))
      .catch((err) => res.status(500).json(err));
  }
  // [POST] xử lí unlike
  unlike(req, res) {
    const { user_id, post_id } = req.body;
    dbModel.Like.destroy({ where: {user_id, post_id }})
      .then((likes) => res.json(likes))
      .catch((err) => res.status(500).json(err));
  }
}
module.exports = new LikeController();
