import { pokemon } from '../data/data.js';

export const getDataByCardAttribute = (req, res) => {
  const { attribute, value } = req.params;

  const allowedCardsFields = [
    'rarity',
    'set_name',
    'set_code',
    'card_number',
    'image_url',
  ];
  if (!allowedCardsFields.includes(req.params.attribute)) {
    return res.status(400).json({ error: 'Invalid attribute' });
  }

  const target = value.toLowerCase();
  const filteredData = pokemon.filter(p =>
    p.cards.some(card => card[attribute]?.toLowerCase() === target)
  );
  res.json(filteredData);
};
