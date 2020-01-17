'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    name: DataTypes.STRING
  }, {});
  Employee.associate = function(models) {
    Employee.belongsTo(models.Company,{
      foreigenkey:'companyId',
      onDelete: 'CASCADE',
    });
    // associations can be defined here
  };
  return Employee;
};