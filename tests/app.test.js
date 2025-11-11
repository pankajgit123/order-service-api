import request from 'supertest';
import makeApp from '../src/app.js';

// describe('ET /orders', () => {
//   describe('given a ordernumber', () => {
//     test('should return order', async () => {
//       const response = await request(makeApp).get('/orders');
//       expect(response.statusCode).toBe(200);
//       expect(response.headers['content-type']).toEqual(
//         expect.stringContaining('json')
//       );
//     });
//     test('no match found', () => {});
//   });
// });

// Mock process.exit in your test setup
beforeAll(() => {
  jest.spyOn(process, 'exit').mockImplementation((code) => {
    console.log(`process.exit called with code: ${code}`);
  });
});

afterAll(() => {
  jest.restoreAllMocks();
});

jest.mock('pg', () => {
  const mClient = {
    connect: jest.fn(),
    query: jest.fn(),
    end: jest.fn(),
  };
  return { Client: jest.fn(() => mClient) };
});

/* eslint-disable no-undef */
describe('Health check', () => {
  test('Health api should return 200', async () => {
    const response = await request(makeApp).get('/ready');
    expect(response.statusCode).toBe(200);
  });
});
