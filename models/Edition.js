/* jshint indent: 2 */

const Edition = sequelize.define('', {
  'id_et': {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    comment: "null",
    autoIncrement: true
  },
  'Employee_id_e': {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: "null",
    references: {
      model: 'Employee',
      key: 'id_e'
    }
  },
  'Type_of_Edition_id_te': {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: "null",
    references: {
      model: 'Type_of_Edition',
      key: 'id_te'
    }
  },
  'edition_date': {
    type: Sequelize.DATEONLY,
    allowNull: false,
    comment: "null"
  }
}, {
  tableName: 'Edition'
});
module.exports = Edition;