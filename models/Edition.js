/* jshint indent: 2 */

const Edition = sequelize.define('Edition', {
  'id_et': {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  'Employee_id_e': {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'Employee',
      key: 'id_e'
    }
  },
  'Type_of_Edition_id_te': {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'Type_of_Edition',
      key: 'id_te'
    }
  },
  'edition_date': {
    type: Sequelize.DATEONLY,
    allowNull: false
  }
}, {
  tableName: 'Edition'
});

module.exports = Edition;