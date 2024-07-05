# Airport Details API

## Project Description

This project is a Node.js backend service designed to manage and query information about airports, cities, and countries. Using PostgreSQL as the database management system and Sequelize as the ORM (Object Relational Mapping) tool, the backend provides an API endpoint to retrieve airport details, including related city and country data. This API is useful for applications that require detailed and relational geographical information.


## Installation Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/dev-saravanan/hava_havai.git
   cd hava_havai
   ```

2. **Install Dependencies**

   Initialize a new Node.js project and install the necessary packages.

   ```bash
   npm install
   ```

3. **Configure PostgreSQL Database**

   Ensure you have PostgreSQL installed and running. Create a new database for the project.

   ```sql
   CREATE DATABASE your_database_name;
   ```

   Update the database configuration in your project (e.g., in a `.env` file or a configuration file).

   ```bash
   DB_NAME=your_database_name
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_HOST=localhost
   DB_PORT=5432
   ```

4. **Run the Server**

   Start the Node.js server to begin using the API.

   ```bash
   npm start
   ```

5. **API Endpoint**

   The API provides a GET route that accepts the `iata_code` parameter. Use this endpoint to query the database for airport details, including related city and country data.

   ```http
   GET /api/airports/:iataCode
   ```

## Notes

- Make sure to install PostgreSQL and configure it properly.
- Replace placeholders in the configuration steps with your actual database details.
- Ensure the server and database are correctly set up before running the application.
