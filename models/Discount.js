/* jshint indent: 2 */

const Discount = sequelize.define('Discount', {
  'id_d': {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  'discount': {
    type: "DOUBLE(3,2)",
    allowNull: false
  },
  'superior_limit': {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'Discount'
});

module.exports = Discount;