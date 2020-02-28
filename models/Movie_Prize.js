/* jshint indent: 2 */

const Movie_Prize = sequelize.define('Movie_Prize', {
  'id_mp': {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  'Movie_id_m': {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'Movie',
      key: 'id_m'
    }
  },
  'Nomination_id_pr': {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'Nomination',
      key: 'id_pr'
    }
  },
  'year': {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  'winner': {
    type: Sequelize.INTEGER(1),
    allowNull: false
  }
}, {
  tableName: 'Movie_Prize'
});

module.exports = Movie_Prize;