'use strict';
/** @type {import('DataTypes-cli').Migration} */

module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('dokter', {
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
      umur: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      spesialis: {
        allowNull: false,
        type: DataTypes.STRING
      },
      gender: {
        allowNull: false,
        type: DataTypes.ENUM('Laki-laki', 'Perempuan'),
      },
      review: {
        type: DataTypes.STRING
      },
      rating: {
        type: DataTypes.INTEGER
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
    await queryInterface.dropTable('dokter');
  }
};