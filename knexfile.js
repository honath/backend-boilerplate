require("dotenv").config();
const path = require("path");

const {
  NODE_ENV = "development",
  DEVELOPMENT_DB_URL,
  PRODUCTION_DB_URL,
} = process.env;

const DATABASE_URL =
  NODE_ENV == "production" ? PRODUCTION_DB_URL : DEVELOPMENT_DB_URL;

module.exports = {
  development: {
    client: "postgresql",
    connection: DATABASE_URL,
    pool: {
      min: 0,
      max: 5,
    },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  production: {
    client: "postgresql",
    connection: DATABASE_URL,
    pool: {
      min: 0,
      max: 5,
    },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },
};
