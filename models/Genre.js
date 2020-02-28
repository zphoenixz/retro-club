/* jshint indent: 2 */

const Genre = sequelize.define('Genre', {
  'id_g': {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  'genre_name': {
    type: Sequelize.STRING(60),
    allowNull: false
  }
}, {
  tableName: 'Genre'
});

module.exports = Genre;