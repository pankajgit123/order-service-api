import db from '../config/db.js';

const getOrders = async (id) => {
  return await db.query('SELECT * FROM orders WHERE id = $1', [id]);
};

export { getOrders };
