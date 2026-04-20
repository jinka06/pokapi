import { pokemon } from '../data/data.js';

export const getDataByPokemonCategory = (req, res) => {
  const { category, item } = req.params;
  let filteredData = pokemon;

  const allowedPokemonFields = [
    'id',
    'name',
    'type',
    'height',
    'weight',
    'stage',
    'colors',
    'evolvesTo',
    'evolvesFrom',
  ];
  if (!allowedPokemonFields.includes(req.params.category)) {
    return res.status(400).json({ error: 'Invalid category' });
  }

  if (req.params.category === 'type' || req.params.category === 'colors') {
    filteredData = filteredData.filter((p) => p[category].includes(item));
  } else if (
    req.params.category === 'stage' ||
    req.params.category === 'name' ||
    req.params.category === 'evolvesTo' ||
    req.params.category === 'evolvesFrom' ||
    req.params.category === 'height' ||
    req.params.category === 'weight'
  ) {
    filteredData = filteredData.filter((p) => p[category] === item);
  }
  res.json(filteredData);
};
