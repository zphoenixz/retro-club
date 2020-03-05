const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const InCart = sequelize.define('In_Cart', {
    'id_customer': {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        comment: "null",
        autoIncrement: false
    },
    'id_movie': {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: "null",
    }
}, {
    tableName: 'Customer'
    // underscored: true,
    // timestamps: false
});

module.exports = InCart;