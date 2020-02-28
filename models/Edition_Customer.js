/* jshint indent: 2 */

const Edition_Customer = sequelize.define('Edition_Customer', {
  'id_ec': {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  'Edition_id_et': {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'Edition',
      key: 'id_et'
    }
  },
  'Customer_id_c': {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'Customer',
      key: 'id_c'
    }
  }
}, {
  tableName: 'Edition_Customer'
});

module.exports = Edition_Customer;