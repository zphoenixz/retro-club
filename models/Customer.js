/* jshint indent: 2 */

const Customer = sequelize.define('Customer', {
  'id_c': {
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
  'register_date': {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  'customer_status': {
    type: Sequelize.INTEGER(1),
    allowNull: false
  }
}, {
  tableName: 'Customer'
});


module.exports = Customer;