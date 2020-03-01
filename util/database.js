const Sequelize = require('sequelize');

const sequelize = new Sequelize('retro_club', 'root', 'ramiro29', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;