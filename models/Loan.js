/* jshint indent: 2 */

const Loan = sequelize.define('Loan', {
  'id_l': {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  'Employee_id_e': {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'Employee',
      key: 'id_e'
    }
  },
  'Customer_id_c': {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'Customer',
      key: 'id_c'
    }
  },
  'start_date': {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  'end_date': {
    type: Sequelize.DATEONLY,
    allowNull: false
  }
}, {
  tableName: 'Loan'
});

module.exports = Loan;