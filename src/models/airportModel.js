const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    static associate(models) {
      Airport.belongsTo(models.City, {
        foreignKey: "city_id",
        as: "city",
      });
      Airport.belongsTo(models.Country, {
        foreignKey: "country_id",
        as: "country",
      });
    }
  }

  Airport.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      icaoCode: {
        type: DataTypes.STRING(10),
        field: "icao_code",
      },
      iataCode: {
        type: DataTypes.STRING(10),
        field: "iata_code",
      },
      name: {
        type: DataTypes.STRING(255),
      },
      type: {
        type: DataTypes.STRING(50),
      },
      cityId: {
        type: DataTypes.INTEGER,
        field: "city_id",
      },
      countryId: {
        type: DataTypes.INTEGER,
        field: "country_id",
      },
      continentId: {
        type: DataTypes.INTEGER,
        field: "continent_id",
      },
      websiteUrl: {
        type: DataTypes.STRING(255),
        field: "website_url",
      },
      createdAt: {
        type: DataTypes.DATE,
        field: "created_at",
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: "updated_at",
      },
      latitudeDeg: {
        type: DataTypes.DOUBLE,
        field: "latitude_deg",
      },
      longitudeDeg: {
        type: DataTypes.DOUBLE,
        field: "longitude_deg",
      },
      elevationFt: {
        type: DataTypes.INTEGER,
        field: "elevation_ft",
      },
      wikipediaLink: {
        type: DataTypes.STRING(255),
        field: "wikipedia_link",
      },
    },
    {
      sequelize,
      underscored: true,
      modelName: "Airport",
      tableName: "airports",
    }
  );

  return Airport;
};
