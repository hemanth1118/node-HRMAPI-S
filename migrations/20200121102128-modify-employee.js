'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn(
          "Employees",
          "departmentId",
          {
            type: Sequelize.DataTypes.INTEGER,
            onDelete: "CASCADE",
            references: {
              model: "Departments",
              key: "id",
              as: "departmentId"
            }
          },
          { transaction: t }
        )
      ]);
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn("Employees", "departmentId", { transaction: t })
      ]);
    });
  }
  };
