/* jshint indent: 2 */

const Person = sequelize.define('Person', {
  'id_p': {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    comment: "null",
    autoIncrement: true
  },
  'first_name': {
    type: Sequelize.STRING(30),
    allowNull: false,
    comment: "null"
  },
  'last_name': {
    type: Sequelize.STRING(30),
    allowNull: false,
    comment: "null"
  },
  'phone': {
    type: Sequelize.STRING(30),
    allowNull: false,
    comment: "null"
  },
  'email': {
    type: Sequelize.STRING(30),
    allowNull: false,
    comment: "null"
  },
  'birth_date': {
    type: Sequelize.DATEONLY,
    allowNull: false,
    comment: "null"
  },
  'address': {
    type: Sequelize.STRING(30),
    allowNull: false,
    comment: "null"
  },
  'idnumber': {
    type: Sequelize.STRING(30),
    allowNull: false,
    comment: "null"
  },
  'nit': {
    type: Sequelize.STRING(30),
    allowNull: false,
    comment: "null"
  },
  'lat': {
    type: "DOUBLE(10,10)",
    allowNull: false,
    comment: "null"
  },
  'longitude': {
    type: "DOUBLE(10,10)",
    allowNull: false,
    comment: "null"
  }
}, {
  tableName: 'Person'
});

module.exports = Person;