const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const MovieStarring = sequelize.define('Movie_Starring', {
  'id_ms': {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
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
  'Stars_id_s': {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: "null",
    references: {
      model: 'Star',
      key: 'id_s'
    }
  }
}, {
  tableName: 'Movie_Starring'
});

module.exports = MovieStarring;