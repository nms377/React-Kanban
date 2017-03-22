'use strict';
module.exports = function(sequelize, DataTypes) {
  var Card = sequelize.define('Card', {
    title: DataTypes.STRING,
    priority: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Card.belongsTo(models.User);
      }
    }
  });
  return Card;
};