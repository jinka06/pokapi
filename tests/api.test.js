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

describe('GET /api/cards/stage/basic', () => {
  it('returns all base stage pokemon', async () => {
    const res = await request(app).get('/api/cards/stage/basic');
    const list = ["Bulbasaur", "Charmander", "Squirtle"]
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    for(const poke of list){
        expect(res.body.some(card => card.name === poke)).toBe(true);
    }
  });
});

describe('GET /api/cards/rarity/promo', () => {
  it('returns cards from specific rarity', async () => {
    const res = await request(app).get('/api/cards/attribute/rarity/Promo');
    const list = ["Gengar"]
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    for(const poke of list){
        expect(res.body.some(card => card.name === poke)).toBe(true);
    }
  });
});