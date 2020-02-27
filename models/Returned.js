/* jshint indent: 2 */

const Returned = sequelize.define('Returned', {
  'id_r': {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    primaryKey: true,
    comment: "null",
    autoIncrement: true
  },
  'Loan_id_l': {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: "null",
    references: {
      model: 'Loan',
      key: 'id_l'
    }
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
  'return_date': {
    type: DataTypes.DATEONLY,
    allowNull: false,
    comment: "null"
  }
}, {
  tableName: 'Returned'
});

module.exports = Returned;