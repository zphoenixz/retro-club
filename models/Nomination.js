/* jshint indent: 2 */

const Nomination = sequelize.define('Nomination', {
  'id_pr': {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    primaryKey: true,
    comment: "null",
    autoIncrement: true
  },
  'category': {
    type: DataTypes.STRING(30),
    allowNull: false,
    comment: "null"
  }
}, {
  tableName: 'Nomination'
});

module.exports = Nomination;