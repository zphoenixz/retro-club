/* jshint indent: 2 */

const Price = sequelize.define('Price', {
  'id_p': {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  'first_day_price': {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  'addition_per_day': {
    type: Sequelize.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'Price'
});

module.exports = Price;