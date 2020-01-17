'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    name: DataTypes.STRING,
    dob: DataTypes.DATE
  }, {});
  Company.associate = function(models) {
    // associations can be defined here
    Company.hasMany(models.Employee,{
      foreigenkey: 'companyId',
      as: 'employees',
    });
  };
  return Company;
};