'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
      {
        nama: 'user22',
        userName: 'user1',
        email: 'user2@gmail.com',
        role: 'pasien',
        password: 'abc123',
        foto: 'linkfoto',
        nomorWa: +628123456,
        umur: 23,
        gender: 'Perempuan',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
