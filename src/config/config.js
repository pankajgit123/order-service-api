import dotenv from "dotenv";
dotenv.config();

export const config = Object.freeze({
  env: process.env.NODE_ENV,
  port: process.env.NODE_LOCAL_PORT,
  loglevel: "info",
  db: {
    host: process.env.DB_HOST,
    user: process.env.POSTGRESDB_USER,
    password: process.env.POSTGRESDB_ROOT_PASSWORD,
    databaseName: process.env.POSTGRESDB_DATABASE,
    localPort: process.env.POSTGRESDB_LOCAL_PORT,
    dockerPort: process.env.POSTGRESDB_DOCKER_PORT,
  },
});
