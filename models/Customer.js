const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Customer = sequelize.define('Customer', {
  'id_c': {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
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
  'register_date': {
    type: Sequelize.DATEONLY,
    allowNull: false,
    comment: "null"
  },
  'customer_status': {
    type: Sequelize.INTEGER(1),
    allowNull: false,
    comment: "null"
  }
}, {
  tableName: 'Customer'
});

module.exports = Customer;