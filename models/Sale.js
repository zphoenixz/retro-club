const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Sale = sequelize.define('Sale', {
  'id_s': {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    primaryKey: true,
    comment: "null",
    autoIncrement: true
  },
  'Loan_id_l': {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: "null",
    references: {
      model: 'Loan',
      key: 'id_l'
    }
  },
  'Discount_id_d': {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: "null",
    references: {
      model: 'Discount',
      key: 'id_d'
    }
  },
  'Price_id_p': {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: "null",
    references: {
      model: 'Price',
      key: 'id_p'
    }
  },
  'total': {
    type: "DOUBLE(5,1)",
    allowNull: false,
    comment: "null"
  }
}, {
  tableName: 'Sale'
});

module.exports = Sale;