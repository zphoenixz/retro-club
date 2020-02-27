/* jshint indent: 2 */

const Movie = sequelize.define('Movie', {
  'id_m': {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    primaryKey: true,
    comment: "null",
    autoIncrement: true
  },
  'duration': {
    type: Sequelize.STRING(30),
    allowNull: false,
    comment: "null"
  },
  'premier_year': {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: "null"
  },
  'unit_price': {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: "null"
  },
  'stock': {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: "null"
  },
  'movie_status': {
    type: Sequelize.INTEGER(1),
    allowNull: false,
    comment: "null"
  }
}, {
  tableName: 'Movie'
});

module.exports = Movie;