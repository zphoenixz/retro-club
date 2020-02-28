const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Star = sequelize.define('Star', {
  'id_s': {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    primaryKey: true,
    comment: "null",
    autoIncrement: true
  },
  'first_name': {
    type: Sequelize.STRING(60),
    allowNull: false,
    comment: "null"
  },
  'last_name': {
    type: Sequelize.STRING(60),
    allowNull: false,
    comment: "null"
  }
}, {
  tableName: 'Star'
});

module.exports = Star;