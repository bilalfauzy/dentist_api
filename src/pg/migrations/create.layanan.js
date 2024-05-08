'use strict';
/** @type {import('DataTypes-cli').Migration} */

module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('layanan', {
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
      biaya: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      deskripsi: {
        allowNull: false,
        type: DataTypes.STRING
      },
      gambar: {
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
    await queryInterface.dropTable('layanan');
  }
};