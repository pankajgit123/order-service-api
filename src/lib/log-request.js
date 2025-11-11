import { logger } from '../util/logger.js';

export const logRequest = (req, res, next) => {
  let body = '';
  if (req.method === 'POST' || req.method === 'PUT') {
    body = ` ${JSON.stringify(req.body)}`;
  }
  logger.info({
    level: 'info',
    message: `${req.method} ${req.url}${body}`,
  });
  next();
};
