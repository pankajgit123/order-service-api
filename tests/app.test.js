import request from 'supertest';
import makeApp from '../src/app.js';

describe('ET /orders', () => {
  describe('given a ordernumber', () => {
    test('should return order', async () => {
      const response = await request(makeApp).get('/orders');
      expect(response.statusCode).toBe(200);
      expect(response.headers['content-type']).toEqual(
        expect.stringContaining('json')
      );
    });
    test('no match found', () => {});
  });
});
