/* jshint indent: 2 */

const Stars = sequelize.define('Stars', {
  'id_s': {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    primaryKey: true,
    comment: "null",
    autoIncrement: true
  },
  'first_name': {
    type: DataTypes.STRING(30),
    allowNull: false,
    comment: "null"
  },
  'last_name': {
    type: DataTypes.STRING(30),
    allowNull: false,
    comment: "null"
  }
}, {
  tableName: 'Stars'
});

module.exports = Stars;