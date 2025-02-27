const request = require('supertest');
const app = require('../form_application');

describe('Dormitory Routes', () => {
  it('should fetch dormitory data by ID', async () => {
    const response = await request(app).get('/fetch-select-data/dormitories/1');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('address');
  });

  it('should return an error if dormitory ID is invalid', async () => {
    const response = await request(app).get('/fetch-select-data/dormitories/999');
    expect(response.status).toBe(404);
    expect(response.body.error).toBe('Дані для гуртожитку не знайдено');
  });
});
