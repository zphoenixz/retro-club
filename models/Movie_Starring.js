/* jshint indent: 2 */

const Movie_Starring = sequelize.define('Movie_Starring', {
  'id_ms': {
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
  'Stars_id_s': {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'Stars',
      key: 'id_s'
    }
  }
}, {
  tableName: 'Movie_Starring'
});

module.exports = Movie_Starring;