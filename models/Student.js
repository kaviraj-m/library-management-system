const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Student = sequelize.define('Student', {
    student_id: { type: DataTypes.STRING, primaryKey: true },
    name: { type: DataTypes.STRING },
    department: { type: DataTypes.STRING },
    year: { type: DataTypes.INTEGER },
    registration_number: { type: DataTypes.STRING, unique: true },
    user_id: { type: DataTypes.STRING, references: { model: 'Users', key: 'user_id' } },
}, { timestamps: true });

module.exports = Student;
