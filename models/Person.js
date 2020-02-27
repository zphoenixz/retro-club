/* jshint indent: 2 */

const Person = sequelize.define('Person', {
  'id_p': {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    primaryKey: true,
    comment: "null",
    autoIncrement: true
  },
  'first_name': {
    type: DataTypes.STRING(30),
    allowNull: false,
    comment: "null"
  },
  'last_name': {
    type: DataTypes.STRING(30),
    allowNull: false,
    comment: "null"
  },
  'phone': {
    type: DataTypes.STRING(30),
    allowNull: false,
    comment: "null"
  },
  'email': {
    type: DataTypes.STRING(30),
    allowNull: false,
    comment: "null"
  },
  'birth_date': {
    type: DataTypes.DATEONLY,
    allowNull: false,
    comment: "null"
  },
  'address': {
    type: DataTypes.STRING(30),
    allowNull: false,
    comment: "null"
  },
  'idnumber': {
    type: DataTypes.STRING(30),
    allowNull: false,
    comment: "null"
  },
  'nit': {
    type: DataTypes.STRING(30),
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