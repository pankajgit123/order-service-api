import orderService from '../service/order.service.js';

const getOrders = async (req, res) => {
  try {
    const user = await orderService.fetchOrders(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

createOrder = async (req, res) => {
  const {} = req.body;
};

export { getOrders, createOrder };
