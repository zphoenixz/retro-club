/* jshint indent: 2 */

const Movie = sequelize.define('Movie', {
  'id_m': {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    primaryKey: true,
    comment: "null",
    autoIncrement: true
  },
  'duration': {
    type: DataTypes.STRING(30),
    allowNull: false,
    comment: "null"
  },
  'premier_year': {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: "null"
  },
  'unit_price': {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: "null"
  },
  'stock': {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: "null"
  },
  'movie_status': {
    type: DataTypes.INTEGER(1),
    allowNull: false,
    comment: "null"
  }
}, {
  tableName: 'Movie'
});

module.exports = Movie;