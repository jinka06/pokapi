import express from 'express';
import { getAllCards } from '../controllers/getAllCards.js';
import { getDataByPokemonCategory } from '../controllers/getDataByPokemonCategory.js';
import { getDataByCardAttribute } from '../controllers/getDataByCardAttribute.js';

export const apiRouter = express.Router();

apiRouter.get('/api/cards', getAllCards);

apiRouter.get('/api/cards/:category/:item', getDataByPokemonCategory);

apiRouter.get('/api/cards/attribute/:attribute/:value', getDataByCardAttribute);
