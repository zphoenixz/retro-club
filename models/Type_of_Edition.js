/* jshint indent: 2 */

const Type_of_Edition = sequelize.define('Type_of_Edition', {
  'id_te': {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    primaryKey: true,
    comment: "null",
    autoIncrement: true
  },
  'description': {
    type: DataTypes.STRING(30),
    allowNull: false,
    comment: "null"
  }
}, {
  tableName: 'Type_of_Edition'
});

module.exports = Type_of_Edition;