/* jshint indent: 2 */

const Employee = sequelize.define('Employee', {
  'id_e': {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    primaryKey: true,
    comment: "null",
    autoIncrement: true
  },
  'Person_id_p': {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: "null",
    references: {
      model: 'Person',
      key: 'id_p'
    }
  },
  'user': {
    type: Sequelize.STRING(10),
    allowNull: false,
    comment: "null"
  },
  'password': {
    type: Sequelize.STRING(20),
    allowNull: false,
    comment: "null"
  }
}, {
  tableName: 'Employee'
});
module.exports = Employee;