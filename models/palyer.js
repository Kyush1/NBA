'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Palyer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Palyer.init({
    PlayerId: DataTypes.STRING,
    LastName: DataTypes.STRING,
    FirstName: DataTypes.STRING,
    Gender: DataTypes.CHAR,
    Weight: DataTypes.STRING,
    ShirtNumber: DataTypes.STRING,
    Email: DataTypes.STRING,
    CountryCode: DataTypes.STRING,
    TeamId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Palyer',
  });
  return Palyer;
};