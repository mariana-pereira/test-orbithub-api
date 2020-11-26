require('dotenv').config();

module.exports = {
  "type": "postgres",
  "host": process.env.TYPEORM_HOST,
  "port": process.env.TYPEORM_PORT,
  "username": process.env.TYPEORM_USERNAME,
  "password": process.env.TYPEORM_PASSWORD,
  "database": process.env.TYPEORM_DATABASE,
  "entities": [
    "./src/models/*.ts",
    "./dist/models/*.js"
  ],
  "migrations": [
    "./src/database/migrations/*.ts",
    "./dist/database/migrations/*.js"
  ],
  "cli": {
    "migrationsDir": "./src/database/migrations",
    "migrationsDir": "./dist/database/migrations"
  }
}