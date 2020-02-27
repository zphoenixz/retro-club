/* jshint indent: 2 */

const Movie_Prize = sequelize.define('Movie_Prize', {
  'id_mp': {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    primaryKey: true,
    comment: "null",
    autoIncrement: true
  },
  'Movie_id_m': {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: "null",
    references: {
      model: 'Movie',
      key: 'id_m'
    }
  },
  'Nomination_id_pr': {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: "null",
    references: {
      model: 'Nomination',
      key: 'id_pr'
    }
  },
  'year': {
    type: DataTypes.INTEGER,
    allowNull: false,
    comment: "null"
  },
  'winner': {
    type: DataTypes.INTEGER(1),
    allowNull: false,
    comment: "null"
  }
}, {
  tableName: 'Movie_Prize'
});

module.exports = Movie_Prize;