const db = require("./../models/index");

exports.getAirportDataByIataCode = async (req, res) => {
  const { iataCode } = req.params;

  try {
    const airport = await db.Airport.findOne({
      where: { iataCode: iataCode },
      include: [
        {
          model: db.City,
          as: "city",
          attributes: ["id", "name", "countryId", "isActive", "lat", "long"],
        },
        {
          model: db.Country,
          as: "country",
          attributes: [
            "id",
            "name",
            "countryCodeTwo",
            "countryCodeThree",
            "mobileCode",
            "continentId",
          ],
        },
      ],
    });

    if (!airport) {
      return res.status(404).json({ message: "Airport not found" });
    }

    const response = {
      airport: {
        id: airport.id,
        icao_code: airport.icaoCode,
        iata_code: airport.iataCode,
        name: airport.name,
        type: airport.type,
        latitude_deg: airport.latitudeDeg,
        longitude_deg: airport.longitudeDeg,
        elevation_ft: airport.elevationFt,
        address: {
          city: airport.city
            ? {
                id: airport.city.id,
                name: airport.city.name,
                country_id: airport.city.countryId,
                is_active: airport.city.isActive,
                lat: airport.city.lat,
                long: airport.city.long,
              }
            : null,
          country: airport.country
            ? {
                id: airport.country.id,
                name: airport.country.name,
                country_code_two: airport.country.countryCodeTwo,
                country_code_three: airport.country.countryCodeThree,
                mobile_code: airport.country.mobileCode,
                continent_id: airport.country.continentId,
              }
            : null,
        },
      },
    };

    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
