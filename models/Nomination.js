/* jshint indent: 2 */

const Nomination = sequelize.define('Nomination', {
  'id_pr': {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  'category': {
    type: Sequelize.STRING(60),
    allowNull: false
  }
}, {
  tableName: 'Nomination'
});

module.exports = Nomination;