'use strict';
/** @type {import('DataTypes-cli').Migration} */

module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('dokterLayanan', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      idDokter: {
        type: DataTypes.INTEGER,
        allowNull: false,
        reference: {
            model: 'Dokter',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      idLayanan: {
        type: DataTypes.INTEGER,
        allowNull: false,
        reference: {
            model: 'Layanan',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
    await queryInterface.dropTable('dokterLayanan');
  }
};