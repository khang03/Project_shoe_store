const express = require('express');
const messageController = require('../controllers/MessageController.js');
const messageRouter = express.Router();

// messageRouter.post('/', messageController.sendMessage)
messageRouter.get('/getmessagebyroom', messageController.getMessageByRoom);
// messageRouter.post('/store', messageController.sendMessage);



module.exports = messageRouter;