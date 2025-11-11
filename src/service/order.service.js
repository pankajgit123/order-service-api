import { orderModel } from '../models/order.model.js';

const fetchOrders = async (id) => {
  const orders = await orderModel.getOrders(id);
  if (!orders) {
    throw new Error('Order not found');
  }
  return orders;
};

const createOrder = async (order) => {};

export { fetchOrders, createOrder };
