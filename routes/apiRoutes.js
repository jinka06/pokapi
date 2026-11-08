import express from 'express';
import { getAllCards } from '../controllers/getAllCards.js';
import { getDataByPokemonCategory } from '../controllers/getDataByPokemonCategory.js';
import { getDataByCardAttribute } from '../controllers/getDataByCardAttribute.js';
import { validate } from '../middleware/validate.js';
import { categoryParams, attributeParams } from '../schemas.js';

export const apiRouter = express.Router();

apiRouter.get('/api/cards', getAllCards);

apiRouter.get(
  '/api/cards/:category/:item',
  validate(categoryParams, 'params'),
  getDataByPokemonCategory
);

apiRouter.get(
  '/api/cards/attribute/:attribute/:value',
  validate(attributeParams, 'params'),
  getDataByCardAttribute
);
