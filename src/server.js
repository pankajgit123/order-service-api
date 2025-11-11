import app from './app.js';
import { config } from './config/config.js';

app.listen(config.port, () => {
  console.log(`App is listening on ${config.port} ✅`);
});
