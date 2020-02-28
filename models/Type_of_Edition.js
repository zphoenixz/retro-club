/* jshint indent: 2 */

const Type_of_Edition = sequelize.define('Type_of_Edition', {
  'id_te': {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  'description': {
    type: Sequelize.STRING(60),
    allowNull: false
  }
}, {
  tableName: 'Type_of_Edition'
});

module.exports = Type_of_Edition;