const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Employee = sequelize.define('Employee', {
  'id_e': {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    comment: "null",
    autoIncrement: true
  },
  'Person_id_p': {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: "null",
    references: {
      model: 'Person',
      key: 'id_p'
    }
  },
  'user': {
    type: Sequelize.STRING(30),
    allowNull: false,
    comment: "null"
  },
  'password': {
    type: Sequelize.STRING(30),
    allowNull: false,
    comment: "null"
  }
}, {
  tableName: 'Employee',
  underscored: true,
  timestamps: false
});

module.exports = Employee;