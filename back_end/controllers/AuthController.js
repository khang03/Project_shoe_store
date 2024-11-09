const { where } = require("sequelize");
const dbModel = require("../models");
const bcrypt = require("bcryptjs"); // Thư viện để mã hóa mật khẩu
const jwt = require("jsonwebtoken");
require("dotenv").config(); // Đảm bảo dòng này xuất hiện trước khi sử dụng biến môi trường

class AuthController {


  
}
module.exports = new AuthController();
