const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const LoanMovie = sequelize.define('Loan_Movie', {
  'id_lm': {
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
  'Movie_id_m': {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: "null",
    references: {
      model: 'Movie',
      key: 'id_m'
    }
  }
}, {
  tableName: 'Loan_Movie'
});

module.exports = LoanMovie;