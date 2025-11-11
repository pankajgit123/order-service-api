import pkg from 'pg';
const { Client } = pkg;
import { config } from '../config/config.js';
import { logger } from '../util/logger.js';

logger.info('test', config);

const client = new Client({
  host: config.db.host, // Postgres ip address[s] or domain name[s], match to docker service name
  port: config.db.dockerPort, // Postgres server port[s]
  database: config.db.databaseName, // Name of database to connect to
  user: config.db.user, // Username of database user
  password: config.db.password, // Password of database user
}); // will use psql environment variables

let count = 0;

(async function connectToDB() {
  try {
    logger.info('trying to make conn ' + count);
    // retry 5 times
    if (count === 5) {
      process.exit(1);
    }
    await client.connect();
    logger.info('Connected to database');
  } catch (error) {
    count++;
    logger.info('got error');
    logger.info(error);
    setTimeout(connectToDB(count), 5000); // Retry after 5 seconds
  }
})();

export default client;
