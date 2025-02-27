const request = require('supertest');
const app = require('../form_application');

describe('Faculty Routes', () => {
  it('should fetch all faculties', async () => {
    const response = await request(app).get('/fetch-select-data/faculties');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should return an error if there are no faculties', async () => {
    const response = await request(app).get('/fetch-select-data/faculties');
    if (response.body.length === 0) {
      expect(response.status).toBe(404);
      expect(response.body.error).toBe('No faculties found');
    }
  });
});

