// Import the database configuration from a separate file
const dbConfig = require("../config/db.config.js");

// Import the Sequelize library
const Sequelize = require("sequelize");

// Create a new Sequelize instance with the database configuration
const sequelize = new Sequelize(
  dbConfig.DB, // database name
  dbConfig.USER, // database username
  dbConfig.PASSWORD, // database password
  {
    host: dbConfig.HOST, // database host
    dialect: dbConfig.dialect, // database dialect (e.g. 'ysql', 'postgres', etc.)

    // Connection pooling configuration ( commented out )
    // pool: {
    //   max: dbConfig.pool.max, // maximum number of connections
    //   min: dbConfig.pool.min, // minimum number of connections
    //   acquire: dbConfig.pool.acquire, // timeout for acquiring a connection
    //   idle: dbConfig.pool.idle, // timeout for idle connections
    // },
  }
);

// Create an empty object to store the database models and Sequelize instance
const db = {};

// Add the Sequelize instance to the db object
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import and add the 'collection' model to the db object
db.collection = require("./collection.model.js")(sequelize, Sequelize);

// Import and add the 'esult' model to the db object
db.result = require("./result.model.js")(sequelize, Sequelize);

// Export the db object, which contains the Sequelize instance and the database models
module.exports = db;
