const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Book = require('./Book');

const BookEntry = sequelize.define('BookEntry', {
    entry_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    book_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Book,
            key: 'book_id',
        },
    },
    user_id: {
        type: DataTypes.STRING,
        references: {
            model: User,
            key: 'user_id',
        },
    },
    entry_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    due_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    returned: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
}, {
    timestamps: true,
    tableName: 'book_entries',
});

module.exports = BookEntry;
