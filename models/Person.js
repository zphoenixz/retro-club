/* jshint indent: 2 */

const Person = sequelize.define('Person', {
  'id_p': {
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
  },
  'phone': {
    type: Sequelize.STRING(60),
    allowNull: false
  },
  'email': {
    type: Sequelize.STRING(60),
    allowNull: false
  },
  'birth_date': {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  'address': {
    type: Sequelize.STRING(60),
    allowNull: false
  },
  'idnumber': {
    type: Sequelize.STRING(60),
    allowNull: false
  },
  'nit': {
    type: Sequelize.STRING(60),
    allowNull: false
  },
  'lat': {
    type: "DOUBLE(10,5)",
    allowNull: false
  },
  'longitude': {
    type: "DOUBLE(10,5)",
    allowNull: false
  }
}, {
  tableName: 'Person'
});

module.exports = Person;