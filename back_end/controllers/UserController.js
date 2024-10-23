// import UserModel
const dbModel = require('../models');

class UserController {

    // [GET] Lây danh sách người dùng
    index(req, res) {
        res.send('<form action="/users/store" method="post"> <input type="hidden" name="q" value="searchF8"> <input type="submit" value="Submit"></form>');
        
        // dbModel.User.findAll()
        //     .then(users => res.json(users))
        //     .catch(err => res.status(500).json(err));
    }
    // [GET] Lấy người dùng cụ thể theo id
    show(req,res) {

        const { id } = req.params;

        
        dbModel.User.findByPk(id)
            .then(user => {
                res.send(user);
                if (user) res.json(user);
                else res.status(404).json({ error: 'User not found' });
            })
            .catch(err => res.status(500).json(err));
    }
    // [POST] xử lý thêm người dùng
    store(req,res) {
        res.send('');
    }
    
    // [PUT] sửa đổi thông tin người dùng
    update(req,res) {

    }

    // [DELETE] xóa người dùng
    destroy() {
        
    }
}

module.exports = new UserController;