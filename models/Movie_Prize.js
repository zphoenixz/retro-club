/* jshint indent: 2 */

const Movie_Prize = sequelize.define('Movie_Prize', {
  'id_mp': {
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
  'Nomination_id_pr': {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: "null",
    references: {
      model: 'Nomination',
      key: 'id_pr'
    }
  },
  'year': {
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
  tableName: 'Movie_Prize'
});

module.exports = Movie_Prize;