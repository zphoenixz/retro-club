/* jshint indent: 2 */

const Loan = sequelize.define('Loan', {
  'id_l': {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    primaryKey: true,
    comment: "null",
    autoIncrement: true
  },
  'Employee_id_e': {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: "null",
    references: {
      model: 'Employee',
      key: 'id_e'
    }
  },
  'Customer_id_c': {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: "null",
    references: {
      model: 'Customer',
      key: 'id_c'
    }
  },
  'start_date': {
    type: DataTypes.DATEONLY,
    allowNull: false,
    comment: "null"
  },
  'end_date': {
    type: DataTypes.DATEONLY,
    allowNull: false,
    comment: "null"
  }
}, {
  tableName: 'Loan'
});
module.exports = Loan;