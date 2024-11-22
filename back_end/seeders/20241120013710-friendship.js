'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Friendships', [
      {
        userid_1: 1,
        userid_2: 2,
        status: 1, 
        room: `1_2`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userid_1: 1,
        userid_2: 3,
        status: 1, 
        room: `1_3`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userid_1: 1,
        userid_2: 4,
        status: 1, 
        room: `1_4`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userid_1: 2,
        userid_2: 3,
        status: 1, 
        room: `2_3`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userid_1: 2,
        userid_2: 4,
        status: 1, 
        room: `2_4`,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Friendships',null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
