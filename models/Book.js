const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Book = sequelize.define('Book', {
    book_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    book_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    edition: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    publisher: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    availability: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    reserved_by: {
        type: DataTypes.STRING,
        allowNull: true,
        references: {
            model: 'users',
            key: 'user_id',
        },
    },
}, {
    timestamps: true,
    tableName: 'book_details',
});

module.exports = Book;
