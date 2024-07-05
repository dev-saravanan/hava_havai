const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    static associate(models) {
      Country.hasMany(models.City, {
        foreignKey: "country_id",
        as: "cities",
      });
      Country.hasMany(models.Airport, {
        foreignKey: "country_id",
        as: "airports",
      });
    }
  }
  Country.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      altName: {
        type: DataTypes.STRING(255),
        field: "alt_name",
      },
      countryCodeTwo: {
        type: DataTypes.CHAR(2),
        allowNull: false,
        field: "country_code_two",
      },
      countryCodeThree: {
        type: DataTypes.CHAR(3),
        allowNull: false,
        field: "country_code_three",
      },
      flagApp: {
        type: DataTypes.STRING(10),
        field: "flag_app",
      },
      mobileCode: {
        type: DataTypes.INTEGER,
        field: "mobile_code",
      },
      continentId: {
        type: DataTypes.INTEGER,
        field: "continent_id",
      },
      countryFlag: {
        type: DataTypes.STRING(255),
        field: "country_flag",
      },
    },
    {
      sequelize,
      underscored: true,
      modelName: "Country",
      tableName: "countries",
    }
  );

  return Country;
};
