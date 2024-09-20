const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const BorrowEntry = sequelize.define('BorrowEntry', {
    entry_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    book_id: { type: DataTypes.INTEGER, references: { model: 'Books', key: 'book_id' } },
    user_id: { type: DataTypes.STRING, references: { model: 'Users', key: 'user_id' } },
    entry_date: { type: DataTypes.DATEONLY },
    due_date: { type: DataTypes.DATEONLY },
    returned: { type: DataTypes.BOOLEAN, defaultValue: false },
}, { timestamps: true });

module.exports = BorrowEntry;
