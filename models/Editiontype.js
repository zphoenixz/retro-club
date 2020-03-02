const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const EditionType =sequelize.define('Editiontype', {
    'id_te': {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'description': {
      type: Sequelize.STRING(60),
      allowNull: false,
      comment: "null"
    }
  }, {
    tableName: 'Editiontype'
    // underscored: true,
    // timestamps: false
  });

  module.exports = EditionType;
