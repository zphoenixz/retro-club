const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Genre = sequelize.define('Genre', {
  'id_g': {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    comment: "null",
    autoIncrement: true
  },
  'genre_name': {
    type: Sequelize.STRING(60),
    allowNull: false,
    comment: "null"
  }
}, {
  tableName: 'Genre'
});

module.exports = Genre;