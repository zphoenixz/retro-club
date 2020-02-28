/* jshint indent: 2 */

const Stars = sequelize.define('Stars', {
  'id_s': {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    comment: "null",
    autoIncrement: true
  },
  'first_name': {
    type: Sequelize.STRING(60),
    allowNull: false,
    comment: "null"
  },
  'last_name': {
    type: Sequelize.STRING(60),
    allowNull: false,
    comment: "null"
  }
}, {
  tableName: 'Stars'
});

module.exports = Stars;