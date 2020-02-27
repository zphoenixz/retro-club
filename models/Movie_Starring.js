/* jshint indent: 2 */

const Movie_Starring = sequelize.define('Movie_Starring', {
  'id_ms': {
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
  'Stars_id_s': {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: "null",
    references: {
      model: 'Stars',
      key: 'id_s'
    }
  }
}, {
  tableName: 'Movie_Starring'
});

module.exports = Movie_Starring;