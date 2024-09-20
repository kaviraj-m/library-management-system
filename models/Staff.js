const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Staff = sequelize.define('Staff', {
    staff_id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    department: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    years_of_service: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'users',
            key: 'user_id',
        },
    },
}, {
    timestamps: true,
    tableName: 'staff',
});

module.exports = Staff;
