/* jshint indent: 2 */

const Employee = sequelize.define('Employee', {
  'id_e': {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  'Person_id_p': {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'Person',
      key: 'id_p'
    }
  },
  'user': {
    type: Sequelize.STRING(30),
    allowNull: false
  },
  'password': {
    type: Sequelize.STRING(30),
    allowNull: false
  }
}, {
  tableName: 'Employee'
});

module.exports = Employee;