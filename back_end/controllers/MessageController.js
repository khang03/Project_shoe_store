// import Models
const dbModel = require("../models");

class MessageController {
  // [GET] lấy tin nhắn của Room (...)
  getMessageByRoom(req, res) {
       
      const {room} = req.query; // dữ liệu gửi theo (payload)
      dbModel.Message.findAll({where: {room}})
      .then(dbModel => {  return res.status(201).json( dbModel) })
      .catch(error => res.status(500).json({message: error.message}));
  }

  // [POST] xử lý gửi lưu tin nhắn
  async saveMessage(data) {

    try {
      const dataMessage = await dbModel.Message.create({
        sender_id: data.senderId,
        receiver_id: data.receiverId,
        room: data.room,
        message_content: data.messageContent,
        message_img: 'none.png',
      });
      return dataMessage; // Trả về tin nhắn đã lưu
    } catch (error) {
      console.error('Error saving message:', error);
      throw error;
    }
    
  }

  // [DELETE] thu hồi tin nhắn
  deleteMessage() {}
}
module.exports = new MessageController();
