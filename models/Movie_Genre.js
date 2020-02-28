/* jshint indent: 2 */

const Movie_Genre = sequelize.define('Movie_Genre', {
  'id_mg': {
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
  'Genre_id_g': {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'Genre',
      key: 'id_g'
    }
  }
}, {
  tableName: 'Movie_Genre'
});

module.exports = Movie_Genre;