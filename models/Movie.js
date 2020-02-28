/* jshint indent: 2 */

const Movie = sequelize.define('Movie', {
  'id_m': {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  'duration': {
    type: Sequelize.STRING(60),
    allowNull: false
  },
  'premier_year': {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  'unit_price': {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  'stock': {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  'movie_status': {
    type: Sequelize.INTEGER(1),
    allowNull: false
  }
}, {
  tableName: 'Movie'
});

module.exports = Movie;