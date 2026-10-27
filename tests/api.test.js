import request from 'supertest';
import { describe, it, expect } from 'vitest';
import app from '../app.js';

describe('API', () => {
  it('serves the home page', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
  });
});

describe('GET /api/cards', () => {
  it('returns all current cards', async () => {
    const res = await request(app).get('/api/cards');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });
});
