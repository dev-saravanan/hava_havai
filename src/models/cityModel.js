const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    static associate(models) {
      City.hasMany(models.Airport, {
        foreignKey: "city_id",
        as: "airport",
      });
      City.belongsTo(models.Country, {
        foreignKey: "country_id",
        as: "country",
      });
    }
  }
  City.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(255),
      },
      altName: {
        type: DataTypes.STRING(255),
        field: "alt_name",
      },
      countryId: {
        type: DataTypes.INTEGER,
        field: "country_id",
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        field: "is_active",
      },
      createdAt: {
        type: DataTypes.DATE,
        field: "created_at",
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: "updated_at",
      },
      lat: {
        type: DataTypes.NUMERIC(9, 6),
      },
      long: {
        type: DataTypes.NUMERIC(9, 6),
      },
    },
    {
      sequelize,
      underscored: true,
      modelName: "City",
      tableName: "cities",
    }
  );

  return City;
};
