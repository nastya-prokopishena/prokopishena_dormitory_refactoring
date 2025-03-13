const request = require('supertest');
const app = require('../form_application');

describe('Benefit Routes', () => {
  it('should fetch all benefits', async () => {
    const response = await request(app).get('/fetch-select-data/benefits');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });
  it('should return 404 if no benefits are found', async () => {
    const response = await request(app).get('/fetch-select-data/benefits');
    if (!response.body.length) {
      expect(response.status).toBe(404);
      expect(response.body.error).toBe('Дані не знайдено');
    } else {
      expect(response.status).toBe(200);
    }
  });
});
