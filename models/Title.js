/* jshint indent: 2 */

const Title = sequelize.define('Title', {
  'id_t': {
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
  'movie_name': {
    type: Sequelize.STRING(60),
    allowNull: false,
    comment: "null"
  }
}, {
  tableName: 'Title'
});

module.exports = Title;