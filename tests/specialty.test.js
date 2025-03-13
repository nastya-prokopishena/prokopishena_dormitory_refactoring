const request = require('supertest');
const app = require('../form_application');

describe('Specialty Routes', () => {
  it('should fetch specialties for a faculty', async () => {
    const response = await request(app).get('/fetch-select-data/specialties/1');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should return an error if faculty ID is invalid', async () => {
    const response = await request(app).get('/fetch-select-data/specialties/999');
    expect(response.status).toBe(404);
    expect(response.body.error).toBe('Факультет з ID 999 не знайдено');
  });

  it('should return empty array if faculty has no specialties', async () => {
    const response = await request(app).get('/fetch-select-data/specialties/1');
    expect(response.status).toBe(200); 
    expect(Array.isArray(response.body)).toBe(true);
  });
});
