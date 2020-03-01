const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const EditionCustomer = sequelize.define('Edition_Customer', {
  'id_ec': {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    comment: "null",
    autoIncrement: true
  },
  'Edition_id_et': {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: "null",
    references: {
      model: 'Edition',
      key: 'id_et'
    }
  },
  'Customer_id_c': {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: "null",
    references: {
      model: 'Customer',
      key: 'id_c'
    }
  }
}, {
  tableName: 'Edition_Customer'
});

module.exports = EditionCustomer;