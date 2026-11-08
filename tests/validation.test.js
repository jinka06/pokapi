import request from 'supertest';
import { describe, it, expect } from 'vitest';
import app from '../app.js';

describe('input validation on GET /api/cards', () => {
  it('accepts a request without a name', async () => {
    const res = await request(app).get('/api/cards');
    expect(res.status).toBe(200);
  });

  it('accepts a valid numeric value', async () => {
    const res = await request(app).get('/api/cards/height/1.7');
    expect(res.status).toBe(200);
  });

  it('accepts a valid category and item', async () => {
    const res = await request(app).get('/api/cards/stage/basic');
    expect(res.status).toBe(200);
  });

  it('rejects a name longer than 25 characters', async () => {
    const res = await request(app).get(`/api/cards/name/${'x'.repeat(26)}`);
    expect(res.status).toBe(400);
    expect(res.body.error).toBe('Invalid input');
  });

  it('rejects an unknown attribute', async () => {
    const res = await request(app).get('/api/cards/attribute/random/x');
    expect(res.status).toBe(400);
  });
});
