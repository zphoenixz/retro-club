const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const MovieNomination = sequelize.define('Movie_Nomination', {
  'id_mp': {
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
  'Nomination_id_pr': {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: "null",
    references: {
      model: 'Nomination',
      key: 'id_pr'
    }
  },
  'winner_year': {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: "null"
  },
  'winner': {
    type: Sequelize.INTEGER(1),
    allowNull: false,
    comment: "null"
  }
}, {
  tableName: 'Movie_Nomination'
});

module.exports = MovieNomination;