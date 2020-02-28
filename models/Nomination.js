/* jshint indent: 2 */

const Nomination = sequelize.define('Nomination', {
  'id_pr': {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    comment: "null",
    autoIncrement: true
  },
  'category': {
    type: Sequelize.STRING(60),
    allowNull: false,
    comment: "null"
  }
}, {
  tableName: 'Nomination'
});

module.exports = Nomination;