/* jshint indent: 2 */

const Edition_Customer = sequelize.define('Edition_Customer', {
  'id_ec': {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    primaryKey: true,
    comment: "null",
    autoIncrement: true
  },
  'Edition_id_et': {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: "null",
    references: {
      model: 'Edition',
      key: 'id_et'
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
  }
}, {
  tableName: 'Edition_Customer'
});

module.exports = Edition_Customer;