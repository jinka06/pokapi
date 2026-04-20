import { pokemon } from '../data/data.js';

export const getAllCards = (req, res) => {
  let filteredData = pokemon;
  if (req.query.type) {
    filteredData = filteredData.filter(p => p.type.includes(req.query.type));
  }
  if (req.query.stage) {
    filteredData = filteredData.filter(p => p.stage === req.query.stage);
  }
  if (req.query.color) {
    filteredData = filteredData.filter(p => p.colors.includes(req.query.color));
  }
  if (req.query.name) {
    filteredData = filteredData.filter(p => p.name === req.query.name);
  }
  if (req.query.rarity) {
    filteredData = filteredData.filter(p =>
      p.cards.some(card => card.rarity === req.query.rarity)
    );
  }
  if (req.query.set_name) {
    filteredData = filteredData.filter(p =>
      p.cards.some(card => card.set_name === req.query.set_name)
    );
  }

  res.json(filteredData);
};
