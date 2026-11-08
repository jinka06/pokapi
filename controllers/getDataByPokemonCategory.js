import { pokemon } from '../data/data.js';

export const getDataByPokemonCategory = (req, res) => {
  const { category, item } = req.validated;
  let filteredData = pokemon;

  if (category === 'type' || category === 'colors') {
    const target = item.toLowerCase();
    filteredData = filteredData.filter(p =>
      p[category]?.some(value => value.toLowerCase() === target)
    );
  } else if (
    category === 'id' ||
    category == 'height' ||
    category == 'weight'
  ) {
    filteredData = filteredData.filter(p => p[category] === Number(item));
  } else if (
    category === 'stage' ||
    category === 'name' ||
    category === 'evolvesTo' ||
    category === 'evolvesFrom'
  ) {
    const target = item.toLowerCase();
    filteredData = pokemon.filter(p => p[category]?.toLowerCase() === target);
  }
  res.json(filteredData);
};
