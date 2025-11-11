import dotenv from 'dotenv';
dotenv.config();

// update if any change in .env
const expectedEnvVariables = [
  'POSTGRESDB_USER',
  'POSTGRESDB_ROOT_PASSWORD',
  'POSTGRESDB_DATABASE',
  'POSTGRESDB_LOCAL_PORT',
  'POSTGRESDB_DOCKER_PORT',
  'NODE_LOCAL_PORT',
  'NODE_DOCKER_PORT',
];

// if (process.env) {
//   expectedEnvVariables.forEach((element) => {
//     if (!process.env[element]) {
//       console.log(
//         `Config value is not available for '${element}'`,
//         process.env[element]
//       );
//       process.exit(1);
//     }
//   });
// }

export const config = Object.freeze({
  env: process.env.NODE_ENV,
  port: process.env.NODE_LOCAL_PORT,
  loglevel: 'info',
  db: {
    host: process.env.DB_HOST,
    user: process.env.POSTGRESDB_USER,
    password: process.env.POSTGRESDB_ROOT_PASSWORD,
    databaseName: process.env.POSTGRESDB_DATABASE,
    localPort: process.env.POSTGRESDB_LOCAL_PORT,
    dockerPort: process.env.POSTGRESDB_DOCKER_PORT,
  },
});
