/* jshint indent: 2 */

const Title = sequelize.define('Title', {
  'id_t': {
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
  'movie_name': {
    type: Sequelize.STRING(60),
    allowNull: false
  }
}, {
  tableName: 'Title'
});

module.exports = Title;