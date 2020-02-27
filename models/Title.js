/* jshint indent: 2 */

const Title = sequelize.define('Title', {
  'id_t': {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    primaryKey: true,
    comment: "null",
    autoIncrement: true
  },
  'Movie_id_m': {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: "null",
    references: {
      model: 'Movie',
      key: 'id_m'
    }
  },
  'name': {
    type: DataTypes.STRING(30),
    allowNull: false,
    comment: "null"
  }
}, {
  tableName: 'Title'
});

module.exports = Title;