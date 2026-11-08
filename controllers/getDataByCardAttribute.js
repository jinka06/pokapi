import { pokemon } from '../data/data.js';

export const getDataByCardAttribute = (req, res) => {
  const { attribute, value } = req.validated;

  const target = value.toLowerCase();
  const filteredData = pokemon.filter(p =>
    p.cards.some(card => String(card[attribute] ?? '').toLowerCase() === target)
  );
  res.json(filteredData);
};
