const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const MovieGenre = sequelize.define('Movie_Genre', {
  'id_mg': {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    comment: "null",
    autoIncrement: true
  },
  'Movie_id_m': {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: "null",
    references: {
      model: 'Movie',
      key: 'id_m'
    }
  },
  'Genre_id_g': {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: "null",
    references: {
      model: 'Genre',
      key: 'id_g'
    }
  }
}, {
  tableName: 'Movie_Genre'
});

module.exports = MovieGenre;