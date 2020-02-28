/* jshint indent: 2 */

const Edition_Movie = sequelize.define('Edition_Movie', {
  'id_em': {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  'Edition_id_et': {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'Edition',
      key: 'id_et'
    }
  },
  'Movie_id_m': {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'Movie',
      key: 'id_m'
    }
  }
}, {
  tableName: 'Edition_Movie'
});

module.exports = Edition_Movie;