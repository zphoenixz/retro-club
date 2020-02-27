/* jshint indent: 2 */

const Discount = sequelize.define('Discount', {
  'id_d': {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    primaryKey: true,
    comment: "null",
    autoIncrement: true
  },
  'discount': {
    type: "DOUBLE(3,2)",
    allowNull: false,
    comment: "null"
  },
  'superior_limit': {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: "null"
  }
}, {
  tableName: 'Discount'
});

module.exports = Discount;