"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //Post Reference
      User.hasMany(models.Post, {
        foreignKey: "user_id",
        as: "n_post"
      })
      // Notification Reference
      User.hasMany(models.Notification, {
        foreignKey: "user_id",
        as: "n_notification"
      })
      // Like Reference
      User.hasMany(models.Like, {
        foreignKey: "user_id",
        as: "n_like"
      })
      // Comment Reference
      User.hasMany(models.Comment, {
        foreignKey: "user_id",
        as: "n_comment"
      })
      // Message Referencce
      User.hasMany(models.Message , {
        foreignKey: 'sender_id',
        as: 'n_sender'
      })

      User.hasMany(models.Message , {
        foreignKey: 'receiver_id',
        as: 'n_receiver'
      })
      // FriendShip Reference
      User.hasMany(models.Friendship , {
        foreignKey: 'userid_1',
        as: 'n_user1'
      })

      User.hasMany(models.Friendship , {
        foreignKey: 'userid_2',
        as: 'n_user2'
      })

      


    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      username: {type:DataTypes.STRING,unique:true},
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      avatar: DataTypes.STRING,
      bio: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
