//import Models
const { where } = require("sequelize");
const dbModel = require("../models");

class CommentController {
  // [GET] lấy danh sách bình luận của bài viết
  getCommentPost(req, res) {
    dbModel.Comment.findAll({ order: [["id", "DESC"]] })
      .then((comments) => res.json(comments))
      .catch((err) => res.status(500).json(err));
  }
  getCommentById(req, res) {
    const { id } = req.params;
    dbModel.Comment.findByPk(id)
      .then((comments) => res.json(comments))
      .catch((err) => res.status(500).json(err));
  }

  // [POST] tạo bình mới cho bài viết
  storeCommentPost(req, res) {
    // const {postId, user}
    // const {  } = req.params; // Giả sử bạn đang thêm bình luận cho một bài viết theo ID
    const { comment_content, post_id } = req.body;
    dbModel.Comment.create({
      comment_content: comment_content,
      post_id: post_id,
      user_id: 1,
    })
      .then((newComment) => {
        res.status(201).json({
          message: "Comment added successfully",
          comment: newComment,
        });
      })
      .catch((err) =>
        res.status(500).json({ error: "Failed to add comment", details: err })
      );
  }

  // [PUT] sửa bình luận cho bài viết

  updateCommentPost(req, res) {
    const { id } = req.params;
    const { commentContent } = req.body;

    // Kiểm tra nếu nội dung bình luận mới không có

    if (!commentContent) {
      return res.status(400).json({ error: "Comment content is required" });
    }

    dbModel.Comment.update(
      { comment_content: commentContent },
      { where: { id } }
    )
      .then((result) => {
        if (result[0] === 0) {
          return res.status(404).json({ error: "Comment not found" });
        }
        res.status(200).json({ message: "Comment updated successfully" });
      })
      .catch((err) =>
        res
          .status(500)
          .json({ error: "Failed to update comment", details: err })
      );
  }

  // [DELETE] xóa bình luận cho bài viết

  deleteCommentPost(req, res) {
    const { id } = req.params;
    dbModel.Comment.destroy({
      where: { id },
    })
      .then((result) => {
        if (result) {
          return res
            .status(200)
            .json({ message: "Comment deleted successfully." });
        } else {
          return res.status(404).json({ error: "Comment not found." });
        }
      })
      .catch((err) =>
        res
          .status(500)
          .json({ error: "Failed to delete comment.", details: err })
      );
  }
}
module.exports = new CommentController();
