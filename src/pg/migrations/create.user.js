'use strict';
/** @type {import('DataTypes-cli').Migration} */

module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      uuid: {
        allowNull: false,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      nama: {
        allowNull: false,
        type: DataTypes.STRING
      },
      userName: {
        allowNull: false,
        type: DataTypes.STRING
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      role: {
        type: DataTypes.ENUM('admin', 'pasien'),
        allowNull: false,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      nomorWa: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      umur: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      gender: {
        allowNull: false,
        type: DataTypes.ENUM('Laki-laki', 'Perempuan'),
      },
      foto: {
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('users');
  }
};