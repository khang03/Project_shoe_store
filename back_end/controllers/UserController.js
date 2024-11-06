// import UserModel
const { where } = require("sequelize");
const dbModel = require("../models");

class UserController {
  // [GET] Lây danh sách người dùng
  index(req, res) {
    dbModel.User.findAll()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  }


  // [GET] Lấy người dùng cụ thể theo id
  // Giả sử bạn đang sử dụng Sequelize ORM để tương tác với database

show(req, res) {
  const { username } = req.params; // Lấy username từ params URL

  // Tìm người dùng theo username
  dbModel.User.findAll({
    where: { username } // Điều kiện tìm kiếm theo username
  })
    .then((user) => {
      if (user) {
        // Nếu tìm thấy người dùng, trả về dữ liệu
        res.json(user);
      } else {
        // Nếu không tìm thấy người dùng, trả về lỗi 404
        res.status(404).json({ error: "User not found" });
      }
    })
    .catch((err) => {
      // Xử lý lỗi nếu có trong quá trình tìm kiếm
      res.status(500).json({ error: "An error occurred while fetching the user", details: err });
    });
}

  // [POST] xử lý thêm người dùng
  store(req, res) {
    res.send("");
  }

  // [PUT] sửa đổi thông tin người dùng
  update(req, res) {}

  // [DELETE] xóa người dùng
  destroy() {}
}

module.exports = new UserController();
