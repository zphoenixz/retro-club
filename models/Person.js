const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Person = sequelize.define('Person', {
  'id_p': {
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
  },
  'phone': {
    type: Sequelize.STRING(60),
    allowNull: false,
    comment: "null"
  },
  'email': {
    type: Sequelize.STRING(60),
    allowNull: false,
    comment: "null"
  },
  'birth_date': {
    type: Sequelize.DATEONLY,
    allowNull: false,
    comment: "null"
  },
  'address': {
    type: Sequelize.STRING(60),
    allowNull: false,
    comment: "null"
  },
  'idnumber': {
    type: Sequelize.STRING(60),
    allowNull: false,
    comment: "null"
  },
  'nit': {
    type: Sequelize.STRING(60),
    allowNull: false,
    comment: "null"
  },
  'lat': {
    type: "DOUBLE(10,5)",
    allowNull: false,
    comment: "null"
  },
  'longitude': {
    type: "DOUBLE(10,5)",
    allowNull: false,
    comment: "null"
  }
}, {
  tableName: 'Person'
});

module.exports = Person;