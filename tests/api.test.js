import request from 'supertest';
import { describe, it, expect } from 'vitest';
import app from '../app.js';

describe('API', () => {
  it('serves the home page', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
  });
});
