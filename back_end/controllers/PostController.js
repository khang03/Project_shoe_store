class PostController {

    // [GET] lấy danh sách bài viết
    index(req,res) {
      res.send('this GET index in post controller');      
    }

    // [GET] lấy danh sách bài viết cụ thể
    show(req,res) {

    }

    //[POST] xử lý tạo 1 bài viết mới
    store(req,res) {

    }

    // [PUT] cập nhật bài viết
    update(req,res) {

    }

    // [DELETE] xóa bài viết
    delete() {

    }
}
module.exports = new PostController;