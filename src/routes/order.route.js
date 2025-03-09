import { Router } from 'express';
const router = Router();
import client from '../util/db.js';
import { logger } from '../util/logger.js';

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Retrieve all orders
 *     description: Get a list of all orders in the system.
 *     responses:
 *       200:
 *         description: A list of orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The order ID
 *                   description:
 *                     type: string
 *                     description: A description of the order
 *                   status:
 *                     type: string
 *                     description: The status of the order
 */
router.get('/orders', async (req, res, next) => {
  const orders = await client.query(`select * from orders`);
  res.status(200).json(orders.rows[0]);
});

/**
 * @swagger
 * /order:
 *   post:
 *     summary: Create a new order
 *     description: Create a new order with the given details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *                 description: The description of the new order.
 *               totalPrice:
 *                 type: number
 *                 description: The total price.
 *               shippingAddressId:
 *                 type: integer
 *                 description: The shipping Address id.
 *     responses:
 *       201:
 *         description: Order created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                   description: The created order ID
 *                 description:
 *                   type: string
 *                   description: The description of the created order
 *                 status:
 *                   type: string
 *                   description: The status of the created order
 */
router.post('/order', async (req, res, next) => {
  try {
    const orderNumber = 'ord3452';
    const { userId, shippingAddressId, totalPrice } = req.body;
    console.log(userId, shippingAddressId, totalPrice);
    const orders = await client.query(
      `INSERT INTO orders (order_number, user_id, shipping_address_id, total_price) 
        VALUES ($1, $2, $3, $4)`,
      [orderNumber, userId, shippingAddressId, totalPrice]
    );

    res.status(201).json(orders.rows[0]);
  } catch (error) {
    logger.info(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.delete('/order', (req, res, next) => {});

export default router;
