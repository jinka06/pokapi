import * as z from 'zod';

export const cardAttributes = ['rarity', 'set_name', 'set_code', 'card_number'];
export const pokemonCategories = [
  'id',
  'name',
  'type',
  'height',
  'weight',
  'stage',
  'colors',
  'evolvesFrom',
  'evolvesTo',
];

const numericCategories = ['id', 'height', 'weight'];

export const attributeParams = z.object({
  attribute: z.enum(cardAttributes),
  value: z
    .string()
    .trim()
    .min(1)
    .max(50, 'item is too long (50 characters max)'),
});

export const categoryParams = z
  .object({
    category: z.enum(pokemonCategories),
    item: z
      .string()
      .trim()
      .min(1)
      .max(25, 'item is too long (25 characters max)'),
  })
  .refine(
    ({ category, item }) =>
      !numericCategories.includes(category) || !Number.isNaN(Number(item)),
    {
      message: 'Item must be a number for id, height, and weight',
      path: ['item'],
    }
  );
