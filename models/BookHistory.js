const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./User');
const Book = require('./Book');

const BookHistory = sequelize.define('BookHistory', {
    history_id: {
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
    action: {
        type: DataTypes.ENUM('borrowed', 'returned', 'reserved'),
        allowNull: false,
    },
    action_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    timestamps: true,
    tableName: 'book_history',
});

module.exports = BookHistory;
