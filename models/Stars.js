/* jshint indent: 2 */

const Stars = sequelize.define('Stars', {
  'id_s': {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  'first_name': {
    type: Sequelize.STRING(60),
    allowNull: false
  },
  'last_name': {
    type: Sequelize.STRING(60),
    allowNull: false
  }
}, {
  tableName: 'Stars'
});

module.exports = Stars;