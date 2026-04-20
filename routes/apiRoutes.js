import express from "express";
import { getAllCards } from "../controllers/getAllCards.js";
import { getDataByPokemonCategory } from "../controllers/getDataByPokemonCategory.js";
import { getDataByCardAttribute } from "../controllers/getDataByCardAttribute.js";

export const apiRouter = express.Router();

apiRouter.get("/", getAllCards);

apiRouter.get("/:category/:item", getDataByPokemonCategory);

apiRouter.get("/cards/:attribute/:value", getDataByCardAttribute);
