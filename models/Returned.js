/* jshint indent: 2 */

const Returned = sequelize.define('Returned', {
  'id_r': {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    comment: "null",
    autoIncrement: true
  },
  'Loan_id_l': {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: "null",
    references: {
      model: 'Loan',
      key: 'id_l'
    }
  },
  'Employee_id_e': {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: "null",
    references: {
      model: 'Employee',
      key: 'id_e'
    }
  },
  'return_date': {
    type: Sequelize.DATEONLY,
    allowNull: false,
    comment: "null"
  }
}, {
  tableName: 'Returned'
});

module.exports = Returned;