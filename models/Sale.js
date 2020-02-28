/* jshint indent: 2 */

const Sale = sequelize.define('Sale', {
  'id_s': {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  'Loan_id_l': {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'Loan',
      key: 'id_l'
    }
  },
  'Discount_id_d': {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'Discount',
      key: 'id_d'
    }
  },
  'Price_id_p': {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'Price',
      key: 'id_p'
    }
  },
  'total': {
    type: "DOUBLE(5,1)",
    allowNull: false
  }
}, {
  tableName: 'Sale'
});

module.exports = Sale;