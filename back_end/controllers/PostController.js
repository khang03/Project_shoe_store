
const { Sequelize, where } = require("sequelize");
const dbModel = require("../models");
const fs = require('fs');
const path = require('path');

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
      order: [['id', 'DESC']]
    })
      .then(posts => {
        res.json(posts);
      })
      .catch(error => {
        res.status(500).json(error);
      });
  }

    // [GET] lấy danh sách bài viết cụ thể
    getAllPostByIdUser(req, res) {
      const { id } = req.params;

      dbModel.Post.findAll({
        where: {user_id: id},
        attributes: {
          include: [
            [
              Sequelize.fn("COUNT", Sequelize.col("manyLike.post_id")),
              "likeCount" // Đếm số lượng like
            ]
          ]
        },
        include: [
          {
            model: dbModel.Image,
            as: 'manyImage',
            attributes: ["img_url","post_id"],  
          },
          {
            model: dbModel.User,
            as: 'oneUser',
            attributes: ["username","avatar"],  
          },
          {
            model: dbModel.Comment,
            as: 'manyComment',
            attributes: ["id","post_id", "comment_content","user_id"],
          },
          {
            model: dbModel.Like,
            as: 'manyLike',
            attributes: [],
          }
          
        ],
        group: ['Post.id', 'manyImage.id', 'manyComment.id'], // Nhóm theo Post và các bảng liên quan
        order: [
          [{ model: dbModel.Comment, as: 'manyComment' }, 'id', 'DESC'] // Sắp xếp comment theo ID giảm dần
        ]

      })

      .then(posts => {
        res.status(201).json({
          message: 'Lấy dữ liệu post của tk thành công',
          posts: posts,
        });
      })
      .catch(error => {
        console.error('Lấy post theo id thất bại',error);
          res.status(500).json({message: 'Không lấy được post id của người dùng'});
      });
        
    }

    //[POST] xử lý tạo 1 bài viết mới
    async store(req,res) {
      // Biến dữ liệu
      const files = req.files;
      const {idUser, contentPost} = req.body;
 
      // kiểm tra giá trị đầu vào 
      if ( contentPost === '' && files.length === 0 )
      {
        return res.status(400).json({ message: 'Vui lòng nhập thông tin bài post'});
      }  
      
      const transaction = await dbModel.sequelize.transaction();
      
      try {
        
        // Tạo new post
        const newPost = await dbModel.Post.create({content:contentPost,user_id:idUser}, {transaction});
 
        // Tạo img-> has been post_id
        if (files.length > 0) {
          const imgRecord = files.map(file => {
            return {
              img_url: file.filename,
              post_id: newPost.id
            }
          })
          const newImg = await dbModel.Image.bulkCreate(imgRecord, {transaction});
        }

        // end transaction
        await transaction.commit();
        
        // phản hồi
        res.status(201).json({
          message: 'Tạo bài post thành công !',
          newPost: newPost
        })
        
      } catch (error) {
        // phản hồi lỗi
        await transaction.rollback();
        console.error('Lỗi tạo post',error);
        res.status(500).json({message: 'Tạo bài post thất bại'});
      }
      
    }

    // [POST] xử lý sửa bài viết
    async update(req,res) {
      // Biến nhận đầu vào
      const postId = req.params.id;
      const files = req.files;
      const {contentPost} = req.body;

      try {
        // Lấy danh bài post theo id
        const post = await dbModel.Post.findByPk(postId);
 
        if (!post) {
          return res.status(404).json({ message: 'Bài viết không tồn tại' });
        }
        // Lấy danh sách ảnh cũ của bài viết từ bảng Image
        const oldImages = await dbModel.Image.findAll({ where: { post_id: post.id } });
        
        // Xóa các file ảnh cũ khỏi thư mục
        // Khi ảnh cũ tồn tại và ảnh input có dữ liệu thì thực hiện
        if (oldImages && files.length >0) {
          oldImages.forEach((image) => {
              const oldImagePath = path.join(__dirname, '../uploads', image.img_url);           
              fs.unlink(oldImagePath, (err) => {
                  if (err) console.error('Lỗi khi xóa ảnh cũ:', err);
              });
          });
          // Xóa ảnh cũ khỏi bảng Image trong CSDL
          await dbModel.Image.destroy({ where: { post_id: post.id } });
        }
 
        // Lưu đường dẫn các ảnh mới vào CSDL
        if (files.length > 0) {
          const newImagePaths = files.map((file) => ({
              img_url: file.filename, // đường dẫn của ảnh mới
              post_id: post.id
          }));
          await dbModel.Image.bulkCreate(newImagePaths);
        }
        // Lưu bài post
        post.content = contentPost;
        await post.save();

        return res.status(201).json({ message: 'Bài viết đã được cập nhật thành công', post })
      } catch (error) {
        console.error('Lỗi khi cập nhật bài viết:', error);
        return res.status(500).json({ message: 'Có lỗi xảy ra khi cập nhật bài viết' });
      }
    }

    
}
module.exports = new PostController();
