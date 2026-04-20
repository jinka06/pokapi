import { pokemon } from '../data/data.js';

export const getDataByCardAttribute = (req, res) => {
  const { attribute, value } = req.params;
  let filteredData = pokemon;

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

  if (req.params.value) {
    filteredData = filteredData.filter(p =>
      p.cards.some(card => card[attribute] === value)
    );
  }
  res.json(filteredData);
};
