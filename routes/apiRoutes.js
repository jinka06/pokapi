import express from 'express';
import { getAllCards } from '../controllers/getAllCards.js';
import { getDataByPokemonCategory } from '../controllers/getDataByPokemonCategory.js';
import { getDataByCardAttribute } from '../controllers/getDataByCardAttribute.js';

export const apiRouter = express.Router();

apiRouter.get('/api', getAllCards);

apiRouter.get('/api/:category/:item', getDataByPokemonCategory);

apiRouter.get('/api/cards/:attribute/:value', getDataByCardAttribute);
