const Sequelize = require('sequelize');

const sequelize = new Sequelize('retro_club', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
    define: {
        timestamps: false,
        underscored: true,
    }
});

module.exports = sequelize;