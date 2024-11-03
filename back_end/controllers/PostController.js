const dbModel = require("../models");
class PostController {
  // [GET] lấy danh sách bài viết
  index(req, res) {
    dbModel.Post.findAll({
      include: [
        {
          model: dbModel.Image,
          attributes: ["img_url","post_id"],
        },
        {
          model: dbModel.User,
          attributes: ["id", "username","avatar"],
        },
        {
          model: dbModel.Comment,
          attributes: ["id","post_id", "comment_content","user_id"]
        },{
          model: dbModel.Like,
          attributes: ["id","user_id"]
        }
      ],
      order: [['id', 'ASC']]
    })
      .then(posts => {
        res.json(posts);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  }

  // [GET] lấy danh sách bài viết cụ thể
  show(req, res) {
    const { id } = req.params;

    dbModel.Post.findByPk(id, {
      include: [
        {
          model: dbModel.Image,
          attributes: ["img_url","post_id"],
        },
        {
          model: dbModel.User,
          attributes: ["id", "username","avatar"],
        },
        {
          model: dbModel.Comment,
          attributes: ["id","post_id", "comment_content","user_id"]
        },{
          model: dbModel.Like,
          attributes: ["id","user_id"]
        }
      ],
      order: [['id', 'ASC']]
    })

    .then(posts => {
      res.json(posts);
    })
    .catch(error => {
      res.status(500).json(error);
    });
      
  }

  //[POST] xử lý tạo 1 bài viết mới
  store(req, res) {}

  // [PUT] cập nhật bài viết
  update(req, res) {}

  // [DELETE] xóa bài viết
  delete() {
    
  }
}
module.exports = new PostController();
