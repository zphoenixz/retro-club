/* jshint indent: 2 */

const Employee = sequelize.define('Employee', {
  'id_e': {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    primaryKey: true,
    comment: "null",
    autoIncrement: true
  },
  'Person_id_p': {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: "null",
    references: {
      model: 'Person',
      key: 'id_p'
    }
  },
  'user': {
    type: DataTypes.STRING(10),
    allowNull: false,
    comment: "null"
  },
  'password': {
    type: DataTypes.STRING(20),
    allowNull: false,
    comment: "null"
  }
}, {
  tableName: 'Employee'
});
module.exports = Employee;