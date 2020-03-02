const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Edition = sequelize.define('Edition', {
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
  'Editiontype_id_te': {
    type: Sequelize.INTEGER,
    allowNull: false,
    comment: "null",
    references: {
      model: 'Editiontype',
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
  // underscored: true,
  // timestamps: false
});

module.exports = Edition;