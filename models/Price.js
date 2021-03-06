const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Price = sequelize.define('Price', {
  'id_p': {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    comment: "null",
    autoIncrement: true
  },
  'first_day_price': {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: "null"
  },
  'addition_per_day': {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: "null"
  }
}, {
  tableName: 'Price'
});

module.exports = Price;