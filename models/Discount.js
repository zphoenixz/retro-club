/* jshint indent: 2 */

const Discount = sequelize.define('Discount', {
  'id_d': {
    type: Sequelize.INTEGER,
    allowNull: false,
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
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: "null"
  }
}, {
  tableName: 'Discount'
});

module.exports = Discount;