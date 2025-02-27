const request = require('supertest');
const app = require('../form_application');

describe('Price Routes', () => {
  it('should fetch price data by ID', async () => {
    const response = await request(app).get('/fetch-select-data/price/1');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('price_amount');
  });

  it('should return an error if price ID is invalid', async () => {
    const response = await request(app).get('/fetch-select-data/price/999');
    expect(response.status).toBe(404);
    expect(response.body.error).toBe('Дані про ціну не знайдено');
  });

  it('should fetch all prices', async () => {
    const response = await request(app).get('/prices');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
