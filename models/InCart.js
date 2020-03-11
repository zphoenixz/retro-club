const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const InCart = sequelize.define('In_Cart', {
    'id_item': {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        comment: "null",
        autoIncrement: true
    },
    'id_movie': {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: "null",
    },
    'id_employee': {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: "null",
    }
}, {
    tableName: 'In_Cart'
    // underscored: true,
    // timestamps: false
});

module.exports = InCart;