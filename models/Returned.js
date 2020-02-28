/* jshint indent: 2 */

const Returned = sequelize.define('Returned', {
  'id_r': {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  'Loan_id_l': {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'Loan',
      key: 'id_l'
    }
  },
  'Employee_id_e': {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'Employee',
      key: 'id_e'
    }
  },
  'return_date': {
    type: Sequelize.DATEONLY,
    allowNull: false
  }
}, {
  tableName: 'Returned'
});


module.exports = Returned;