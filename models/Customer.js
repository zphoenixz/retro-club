/* jshint indent: 2 */

const Customer = sequelize.define('Customer', {
  'id_c': {
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
  'register_date': {
    type: DataTypes.DATEONLY,
    allowNull: false,
    comment: "null"
  },
  'customer_status': {
    type: DataTypes.INTEGER(1),
    allowNull: false,
    comment: "null"
  }
}, {
  tableName: 'Customer'
});

module.exports = Customer;