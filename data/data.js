export const pokemon = [
  // ══════════════════════════════════════════════════════════════════════════
  // ─── Kanto (Gen 1) ────────────────────────────────────────────────────────
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: 1,
    name: 'Bulbasaur',
    type: ['grass', 'poison'],
    height: 0.7,
    weight: 6.9,
    stage: 'basic',
    colors: ['green', 'teal', 'navy'],
    evolvesTo: 'Ivysaur',
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Scarlet & Violet-151',
        set_code: 'MEW',
        card_number: '166/165',
        image_url: 'https://images.scrydex.com/pokemon/sv3pt5-166/medium',
      },
      {
        rarity: 'Illustration Rare',
        set_name: 'Scarlet & Violet-Stellar Crown',
        set_code: 'SCR',
        card_number: '143/142',
        image_url: 'https://images.scrydex.com/pokemon/sv7-143/medium',
      },
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution',
        set_code: 'MEG',
        card_number: '133/132',
        image_url: 'https://images.scrydex.com/pokemon/me1-133/medium',
      },
    ],
  },

  {
    id: 2,
    name: 'Ivysaur',
    type: ['grass', 'poison'],
    height: 1.0,
    weight: 13.0,
    stage: 'stage1',
    colors: ['green', 'teal', 'navy'],
    evolvesTo: 'Venusaur',
    evolvesFrom: 'Bulbasaur',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Scarlet & Violet-151',
        set_code: 'MEW',
        card_number: '167/165',
        image_url: 'https://images.scrydex.com/pokemon/sv3pt5-167/medium',
      },
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution',
        set_code: 'MEG',
        card_number: '134/132',
        image_url: 'https://images.scrydex.com/pokemon/me1-134/medium',
      },
    ],
  },

  {
    id: 3,
    name: 'Venusaur',
    type: ['grass', 'poison'],
    height: 2.0,
    weight: 100.0,
    stage: 'stage2',
    colors: ['green', 'teal'],
    evolvesTo: null,
    evolvesFrom: 'Ivysaur',
    cards: [
      {
        rarity: 'Special Illustration Rare',
        set_name: 'Scarlet & Violet-151',
        set_code: 'MEW',
        card_number: '198/165',
        image_url: 'https://images.scrydex.com/pokemon/sv3pt5-198/medium',
      },
      {
        rarity: 'Special Illustration Rare',
        set_name: 'Mega Evolution',
        set_code: 'MEG',
        card_number: '177/132',
        image_url: 'https://images.scrydex.com/pokemon/me1-177/medium',
      },
    ],
  },

  {
    id: 4,
    name: 'Charmander',
    type: ['fire'],
    height: 0.6,
    weight: 8.5,
    stage: 'basic',
    colors: ['orange', 'red', 'yellow'],
    evolvesTo: 'Charmeleon',
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Scarlet & Violet-151',
        set_code: 'MEW',
        card_number: '168/165',
        image_url: 'https://images.scrydex.com/pokemon/sv3pt5-168/medium',
      },
    ],
  },

  {
    id: 5,
    name: 'Charmeleon',
    type: ['fire'],
    height: 1.1,
    weight: 19.0,
    stage: 'stage1',
    colors: ['orange', 'red'],
    evolvesTo: 'Charizard',
    evolvesFrom: 'Charmander',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Scarlet & Violet-151',
        set_code: 'MEW',
        card_number: '169/165',
        image_url: 'https://images.scrydex.com/pokemon/sv3pt5-169/medium',
      },
    ],
  },

  {
    id: 6,
    name: 'Charizard',
    type: ['fire', 'flying'],
    height: 1.7,
    weight: 90.5,
    stage: 'stage2',
    colors: ['orange', 'red', 'navy'],
    evolvesTo: null,
    evolvesFrom: 'Charmeleon',
    cards: [
      {
        rarity: 'Special Illustration Rare',
        set_name: 'Scarlet & Violet-151',
        set_code: 'MEW',
        card_number: '199/165',
        image_url: 'https://images.scrydex.com/pokemon/sv3pt5-199/medium',
      },
      {
        rarity: 'Special Illustration Rare',
        set_name: 'Scarlet & Violet-Obsidian Flames',
        set_code: 'OBF',
        card_number: '228/197',
        image_url: 'https://images.scrydex.com/pokemon/sv3-228/medium',
      },
      {
        rarity: 'Special Illustration Rare',
        set_name: 'Scarlet & Violet-Paldean Fates',
        set_code: 'PAF',
        card_number: '234/091',
        image_url: 'https://images.scrydex.com/pokemon/sv4pt5-234/medium',
      },
      {
        rarity: 'Special Illustration Rare',
        set_name: 'Mega Evolution-Phantasmal Flames',
        set_code: 'PFL',
        card_number: '125/094',
        image_url: 'https://images.scrydex.com/pokemon/me2-125/medium',
      },
    ],
  },

  {
    id: 7,
    name: 'Squirtle',
    type: ['water'],
    height: 0.5,
    weight: 9.0,
    stage: 'basic',
    colors: ['blue', 'teal'],
    evolvesTo: 'Wartortle',
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Scarlet & Violet-151',
        set_code: 'MEW',
        card_number: '170/165',
        image_url: 'https://images.scrydex.com/pokemon/sv3pt5-170/medium',
      },
      {
        rarity: 'Illustration Rare',
        set_name: 'Scarlet & Violet-Stellar Crown',
        set_code: 'SCR',
        card_number: '148/142',
        image_url: 'https://images.scrydex.com/pokemon/sv7-148/medium',
      },
    ],
  },

  {
    id: 8,
    name: 'Wartortle',
    type: ['water'],
    height: 1.0,
    weight: 22.5,
    stage: 'stage1',
    colors: ['blue', 'teal'],
    evolvesTo: 'Blastoise',
    evolvesFrom: 'Squirtle',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Scarlet & Violet-151',
        set_code: 'MEW',
        card_number: '171/165',
        image_url: 'https://images.scrydex.com/pokemon/sv3pt5-171/medium',
      },
    ],
  },

  {
    id: 9,
    name: 'Blastoise',
    type: ['water'],
    height: 1.6,
    weight: 85.5,
    stage: 'stage2',
    colors: ['blue', 'navy'],
    evolvesTo: null,
    evolvesFrom: 'Wartortle',
    cards: [
      {
        rarity: 'Special Illustration Rare',
        set_name: 'Scarlet & Violet-151',
        set_code: 'MEW',
        card_number: '200/165',
        image_url: 'https://images.scrydex.com/pokemon/sv3pt5-200/medium',
      },
    ],
  },

  {
    id: 10,
    name: 'Caterpie',
    type: ['bug'],
    height: 0.3,
    weight: 2.9,
    stage: 'basic',
    colors: ['green', 'yellow'],
    evolvesTo: 'Metapod',
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Scarlet & Violet-151',
        set_code: 'MEW',
        card_number: '172/165',
        image_url: 'https://images.scrydex.com/pokemon/sv3pt5-172/medium',
      },
    ],
  },
  {
    id: 17,
    name: 'Pidgeotto',
    type: ['flying', 'normal'],
    height: 1.1,
    weight: 30.0,
    stage: 'stage1',
    colors: ['brown', 'red', 'white'],
    evolvesTo: 'Pidgeot',
    evolvesFrom: 'Pidgey',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Scarlet & Violet-Obsidian Flames',
        set_code: 'OBF',
        card_number: '208/197',
        image_url: 'https://images.scrydex.com/pokemon/sv3-208/medium',
      },
    ],
  },
  {
    id: 17,
    name: 'Pidgeot',
    type: ['flying', 'normal'],
    height: 1.5,
    weight: 39.5,
    stage: 'stage2',
    colors: ['brown', 'red', 'white'],
    evolvesTo: null,
    evolvesFrom: 'Pidgeotto',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Scarlet & Violet-Obsidian Flames',
        set_code: 'OBF',
        card_number: '225/197',
        image_url: 'https://images.scrydex.com/pokemon/sv3-225/medium',
      },
    ],
  },
  {
    id: 20,
    name: 'Raticate',
    type: ['normal'],
    height: 0.7,
    weight: 18.5,
    stage: 'stage1',
    colors: ['brown', 'white'],
    evolvesTo: null,
    evolvesFrom: 'Rattata',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Scarlet & Violet-Destined Rivals',
        set_code: 'DRI',
        card_number: '202/182',
        image_url: 'https://images.scrydex.com/pokemon/sv10-202/medium',
      },
      {
        rarity: 'Special Illustration Rare',
        set_name: 'Mega Evolution-Perfect Order',
        set_code: 'POR',
        card_number: '099/088',
        image_url: 'https://images.scrydex.com/pokemon/me3-99/medium',
      },
    ],
  },
  {
    id: 21,
    name: 'Spearow',
    type: ['flying', 'normal'],
    height: 0.3,
    weight: 2.0,
    stage: 'basic',
    colors: ['brown', 'red', 'white'],
    evolvesTo: 'Fearow',
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution',
        set_code: 'MEG',
        card_number: '151/132',
        image_url: 'https://images.scrydex.com/pokemon/me1-151/medium',
      },
    ],
  },
  {
    id: 24,
    name: 'Arbok',
    type: ['poison'],
    height: 3.5,
    weight: 65.0,
    stage: 'stage1',
    colors: ['purple', 'black'],
    evolvesTo: null,
    evolvesFrom: 'Ekans',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Scarlet & Violet-Temporal Forces',
        set_code: 'TEF',
        card_number: '176/162',
        image_url: 'https://images.scrydex.com/pokemon/sv5-176/medium',
      },
    ],
  },
  {
    id: 25,
    name: 'Pikachu',
    type: ['electric'],
    height: 0.4,
    weight: 6.0,
    stage: 'basic',
    colors: ['yellow', 'red'],
    evolvesTo: 'Raichu',
    evolvesFrom: 'Pichu',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Scarlet & Violet-151',
        set_code: 'MEW',
        card_number: '173/165',
        image_url: 'https://images.scrydex.com/pokemon/sv3pt5-173/medium',
      },
      {
        rarity: 'Special Illustration Rare',
        set_name: 'Scarlet & Violet-Surging Sparks',
        set_code: 'SSP',
        card_number: '238/191',
        image_url: 'https://images.scrydex.com/pokemon/sv8-238/medium',
      },
      {
        rarity: 'Special Illustration Rare',
        set_name: 'Mega Evolution-Ascended Heroes',
        set_code: 'ASC',
        card_number: '276/217',
        image_url: 'https://images.scrydex.com/pokemon/me2pt5-276/medium',
      },
      {
        rarity: 'Special Illustration Rare',
        set_name: 'Mega Evolution-Ascended Heroes',
        set_code: 'ASC',
        card_number: '277/217',
        image_url: 'https://images.scrydex.com/pokemon/me2pt5-277/medium',
      },
    ],
  },
  {
    id: 26,
    name: 'Raichu',
    type: ['electric'],
    height: 0.8,
    weight: 30.0,
    stage: 'stage1',
    colors: ['yellow', 'orange', 'white', 'brown'],
    evolvesTo: null,
    evolvesFrom: 'Pikachu',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Scarlet & Violet-Paldea Evolved',
        set_code: 'PAL',
        card_number: '211/193',
        image_url: 'https://images.scrydex.com/pokemon/sv2-211/medium',
      },
    ],
  },
  {
    id: 34,
    name: 'Nidoking',
    type: ['poison', 'ground'],
    height: 1.4,
    weight: 62.0,
    stage: 'stage2',
    colors: ['purple', 'navy'],
    evolvesTo: null,
    evolvesFrom: 'Nidorino',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Scarlet & Violet-151',
        set_code: 'MEW',
        card_number: '174/165',
        image_url: 'https://images.scrydex.com/pokemon/sv3pt5-174/medium',
      },
      {
        rarity: 'Special Illustration Rare',
        set_name: 'Scarlet & Violet-Destined Rivals',
        set_code: 'DRI',
        card_number: '233/182',
        image_url: 'https://images.scrydex.com/pokemon/sv10-233/medium',
      },
    ],
  },
  {
    id: 35,
    name: 'Clefairy',
    type: ['fairy'],
    height: 0.6,
    weight: 7.5,
    stage: 'basic',
    colors: ['pink', 'brown'],
    evolvesTo: 'Clefable',
    evolvesFrom: 'Cleffa',
    cards: [
      {
        rarity: 'Special Illustration Rare',
        set_name: 'Mega Evolution-Perfect Order',
        set_code: 'POR',
        card_number: '094/088',
        image_url: 'https://images.scrydex.com/pokemon/me3-94/medium',
      },
      {
        rarity: 'Special Illustration Rare',
        set_name: 'Mega Evolution-Ascended Heroes',
        set_code: 'ASC',
        card_number: '280/217',
        image_url: 'https://images.scrydex.com/pokemon/me2pt5-280/medium',
      },
      {
        rarity: 'Illustration Rare',
        set_name: 'Scarlet & Violet-Journey Together',
        set_code: 'JTG',
        card_number: '184/159',
        image_url: 'https://images.scrydex.com/pokemon/sv9-184/medium',
      },
    ],
  },
  {
    id: 36,
    name: 'Clefable',
    type: ['fairy'],
    height: 1.3,
    weight: 40.0,
    stage: 'stage1',
    colors: ['pink', 'brown'],
    evolvesTo: null,
    evolvesFrom: 'Clefairy',
    cards: [
      {
        rarity: 'Special Illustration Rare',
        set_name: 'Mega Evolution-Perfect Order',
        set_code: 'POR',
        card_number: '119/088',
        image_url: 'https://images.scrydex.com/pokemon/me3-119/medium',
      },
    ],
  },
  {
    id: 37,
    name: 'Vulpix',
    type: ['fire'],
    height: 0.6,
    weight: 9.9,
    stage: 'basic',
    colors: ['red', 'orange', 'white'],
    evolvesTo: 'Ninetales',
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution',
        set_code: 'MEG',
        card_number: '138/132',
        image_url: 'https://images.scrydex.com/pokemon/me1-138/medium',
      },
    ],
  },
  {
    id: 38,
    name: 'Ninetales',
    type: ['fire'],
    height: 1.1,
    weight: 19.9,
    stage: 'stage1',
    colors: ['beige', 'orange'],
    evolvesTo: null,
    evolvesFrom: 'Vulpix',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Scarlet & Violet-Obsidian Flames',
        set_code: 'OBF',
        card_number: '199/197',
        image_url: 'https://images.scrydex.com/pokemon/sv3-199/medium',
      },
    ],
  },
  {
    id: 40,
    name: 'Wigglytuff',
    type: ['fairy'],
    height: 1.0,
    weight: 12.0,
    stage: 'stage1',
    colors: ['pink', 'white'],
    evolvesTo: null,
    evolvesFrom: 'Jigglypuff',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Phantasmal Flames',
        set_code: 'PFL',
        card_number: '105/094',
        image_url: 'https://images.scrydex.com/pokemon/me2-105/medium',
      },
    ],
  },
  {
    id: 44,
    name: 'Gloom',
    type: ['grass', 'poison'],
    height: 0.8,
    weight: 8.6,
    stage: 'stage1',
    colors: ['blue', 'purple', 'red'],
    evolvesTo: 'Vileplume',
    evolvesFrom: 'Oddish',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Scarlet & Violet-Obsidian Flames',
        set_code: 'OBF',
        card_number: '198/197',
        image_url: 'https://images.scrydex.com/pokemon/sv3-198/medium',
      },
    ],
  },
  {
    id: 50,
    name: 'Diglett *',
    type: ['ground'],
    height: 0.2,
    weight: 0.8,
    stage: 'basic',
    colors: ['brown'],
    evolvesTo: 'Dugtrio',
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Genetic Apex',
        set_code: null,
        card_number: 'a1-238',
        image_url: 'https://assets.mytcgcollection.com/tcgpocket/set/a1/a1-238.webp',
      },
    ],
  },
  {
    id: 51,
    name: 'Dugtrio',
    type: ['ground'],
    height: 0.7,
    weight: 33.3,
    stage: 'stage1',
    colors: ['brown'],
    evolvesTo: null,
    evolvesFrom: 'Diglett',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Ascended Heroes',
        set_code: 'ASC',
        card_number: '239/217',
        image_url: 'https://images.scrydex.com/pokemon/me2pt5-239/medium',
      },
      {
        rarity: 'Illustration Rare',
        set_name: 'Scarlet & Violet-Surging Sparks',
        set_code: 'SSP',
        card_number: '208/217',
        image_url: 'https://images.scrydex.com/pokemon/sv8-208/medium',
      }
    ],
  },
  {
    id: 52,
    name: 'Meowth',
    type: ['normal'],
    height: 0.4,
    weight: 4.2,
    stage: 'basic',
    colors: ['orange', 'white'],
    evolvesTo: 'Persian',
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Phantasmal Flames',
        set_code: 'PFL',
        card_number: '106/094',
        image_url: 'https://images.scrydex.com/pokemon/me2-106/medium',
      },
      {
        rarity: 'Illustration Rare',
        set_name: 'Scarlet & Violet-Destined Rivals',
        set_code: 'DRI',
        card_number: '203/182',
        image_url: 'https://images.scrydex.com/pokemon/sv10-203/medium',
      },
      {
        rarity: 'Special Illustration Rare',
        set_name: 'Mega Evolution-Perfect Order',
        set_code: 'POR',
        card_number: '121/088',
        image_url: 'https://images.scrydex.com/pokemon/me3-121/medium',
      },
      {
        rarity: 'Illustration Rare',
        set_name: 'Genetic Apex',
        set_code: null,
        card_number: 'A1-246',
        image_url: 'https://images.scrydex.com/pokemon/tcgp-A1-246/medium',
      },
      {
        rarity: 'Illustration Rare',
        set_name: 'Extradimensional Crisis',
        set_code: null,
        card_number: 'A3a-73',
        image_url: 'https://images.scrydex.com/pokemon/tcgp-A3a-73/medium',
      },
      {
        rarity: 'Special Illustration Rare',
        set_name: 'Fantastical Parade',
        set_code: null,
        card_number: 'B2-204',
        image_url: 'https://images.scrydex.com/pokemon/tcgp-B2-204/medium',
      }
    ],
  },
  {
    id: 53,
    name: 'Persian',
    type: ['normal'],
    height: 1.0,
    weight: 32.0,
    stage: 'stage1',
    colors: ['beige', 'white'],
    evolvesTo: null,
    evolvesFrom: 'Meowth',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Scarlet & Violet-Shrouded Fable',
        set_code: 'SFA',
        card_number: '078/064',
        image_url: 'https://images.scrydex.com/pokemon/sv6pt5-78/medium',
      },
    ],
  },
  {
    id: 54,
    name: 'Psyduck',
    type: ['water'],
    height: 0.8,
    weight: 19.6,
    stage: 'basic',
    colors: ['yellow', 'cream'],
    evolvesTo: 'Golduck',
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Scarlet & Violet-151',
        set_code: 'MEW',
        card_number: '175/165',
        image_url: 'https://images.scrydex.com/pokemon/sv3pt5-175/medium',
      },
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Ascended Heroes',
        set_code: 'ASC',
        card_number: '226/217',
        image_url: 'https://images.scrydex.com/pokemon/me2pt5-226/medium',
      },
      {
        rarity: 'Illustration Rare',
        set_name: 'Scarlet & Violet-Destined Rivals',
        set_code: 'DRI',
        card_number: '193/182',
        image_url: 'https://images.scrydex.com/pokemon/sv10-193/medium',
      }
    ],
  },
{
    id: 58,
    name: 'Growlithe',
    type: ['fire'],
    height: 0.7,
    weight: 19.0,
    stage: 'basic',
    colors: ['orange', 'white'],
    evolvesTo: 'Arcanine',
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Scarlet & Violet-Twilight Masquerade',
        set_code: 'TWM',
        card_number: '181/167',
        image_url: 'https://images.scrydex.com/pokemon/sv6-181/medium',
      },
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Rising',
        set_code: null,
        card_number: 'B1-230',
        image_url: 'https://images.scrydex.com/pokemon/tcgp-B1-230/medium',
      }
    ],
  },
  {
    id: 61,
    name: 'Poliwhirl',
    type: ['water'],
    height: 1.0,
    weight: 20.0,
    stage: 'stage1',
    colors: ['blue', 'white'],
    evolvesTo: 'Poliwrath',
    evolvesFrom: 'Poliwag',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Scarlet & Violet-151',
        set_code: 'MEW',
        card_number: '176/165',
        image_url: 'https://images.scrydex.com/pokemon/sv3pt5-176/medium',
      },
    ],
  },

  {
    id: 67,
    name: 'Machoke',
    type: ['fighting'],
    height: 1.5,
    weight: 70.5,
    stage: 'stage1',
    colors: ['purple', 'grey'],
    evolvesTo: 'Machamp',
    evolvesFrom: 'Machop',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Scarlet & Violet-151',
        set_code: 'MEW',
        card_number: '177/165',
        image_url: 'https://images.scrydex.com/pokemon/sv3pt5-177/medium',
      },
    ],
  },

  {
    id: 65,
    name: 'Alakazam',
    type: ['psychic'],
    height: 1.5,
    weight: 48.0,
    stage: 'stage2',
    colors: ['gold', 'brown'],
    evolvesTo: null,
    evolvesFrom: 'Kadabra',
    cards: [
      {
        rarity: 'Special Illustration Rare',
        set_name: 'Scarlet & Violet-151',
        set_code: 'MEW',
        card_number: '201/165',
        image_url: 'https://images.scrydex.com/pokemon/sv3pt5-201/medium',
      },
    ],
  },

  {
    id: 114,
    name: 'Tangela',
    type: ['grass'],
    height: 1.0,
    weight: 35.0,
    stage: 'basic',
    colors: ['blue', 'green'],
    evolvesTo: 'Tangrowth',
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Scarlet & Violet-151',
        set_code: 'MEW',
        card_number: '178/165',
        image_url: 'https://images.scrydex.com/pokemon/sv3pt5-178/medium',
      },
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Ascended Heroes',
        set_code: 'ASC',
        card_number: '218/217',
        image_url: 'https://images.scrydex.com/pokemon/me2pt5-218/medium',
      },
    ],
  },

  {
    id: 122,
    name: 'Mr. Mime',
    type: ['psychic', 'fairy'],
    height: 1.3,
    weight: 54.5,
    stage: 'basic',
    colors: ['pink', 'white'],
    evolvesTo: 'Mr. Rime',
    evolvesFrom: 'Mime Jr.',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Scarlet & Violet-151',
        set_code: 'MEW',
        card_number: '179/165',
        image_url: 'https://images.scrydex.com/pokemon/sv3pt5-179/medium',
      },
    ],
  },

  {
    id: 138,
    name: 'Omanyte',
    type: ['rock', 'water'],
    height: 0.4,
    weight: 7.5,
    stage: 'basic',
    colors: ['blue', 'white'],
    evolvesTo: 'Omastar',
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Scarlet & Violet-151',
        set_code: 'MEW',
        card_number: '180/165',
        image_url: 'https://images.scrydex.com/pokemon/sv3pt5-180/medium',
      },
    ],
  },

  {
    id: 148,
    name: 'Dragonair',
    type: ['dragon'],
    height: 4.0,
    weight: 16.5,
    stage: 'stage1',
    colors: ['blue', 'white'],
    evolvesTo: 'Dragonite',
    evolvesFrom: 'Dratini',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Scarlet & Violet-151',
        set_code: 'MEW',
        card_number: '181/165',
        image_url: 'https://images.scrydex.com/pokemon/sv3pt5-181/medium',
      },
    ],
  },

  {
    id: 145,
    name: 'Zapdos',
    type: ['electric', 'flying'],
    height: 1.6,
    weight: 52.6,
    stage: 'basic',
    colors: ['yellow', 'grey'],
    evolvesTo: null,
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Special Illustration Rare',
        set_name: 'Scarlet & Violet-151',
        set_code: 'MEW',
        card_number: '202/165',
        image_url: 'https://images.scrydex.com/pokemon/sv3pt5-202/medium',
      },
    ],
  },

  // ─── Gen 1 Pokémon from Mega Evolution (MEG) ─────────────────────────────

  {
    id: 102,
    name: 'Exeggutor',
    type: ['grass', 'psychic'],
    height: 2.0,
    weight: 120.0,
    stage: 'stage1',
    colors: ['yellow', 'green'],
    evolvesTo: null,
    evolvesFrom: 'Exeggcute',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution',
        set_code: 'MEG',
        card_number: '135/132',
        image_url: 'https://images.scrydex.com/pokemon/me1-135/medium',
      },
    ],
  },

  {
    id: 21,
    name: 'Spearow',
    type: ['normal', 'flying'],
    height: 0.3,
    weight: 2.0,
    stage: 'basic',
    colors: ['brown', 'red'],
    evolvesTo: 'Fearow',
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution',
        set_code: 'MEG',
        card_number: '151/132',
        image_url: 'https://images.scrydex.com/pokemon/me1-151/medium',
      },
    ],
  },

  {
    id: 113,
    name: 'Delibird',
    // NOTE: Delibird is Gen 2 (#225 national dex), but appears in MEG set
    // kept here as it appears alongside gen1 entries in MEG
    type: ['ice', 'flying'],
    height: 0.9,
    weight: 16.0,
    stage: 'basic',
    colors: ['red', 'white'],
    evolvesTo: null,
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution',
        set_code: 'MEG',
        card_number: '152/132',
        image_url: 'https://images.scrydex.com/pokemon/me1-152/medium',
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // ─── Johto (Gen 2) ────────────────────────────────────────────────────────
  // ══════════════════════════════════════════════════════════════════════════

  // NOTE: Delibird (national dex #225) is listed under Gen 1 above because it
  // appears in the same set block. It belongs here canonically.
  // {id:225, name:'Delibird'} → see entry above in MEG section

  // No Gen 2 Pokémon have confirmed IR/SIR cards in verified sets at this time
  // beyond what appears in cross-gen sets (e.g. Togekiss ASC, Misdreavus ASC).
  // These cross-gen appearances are listed under their actual generation below.

  // ══════════════════════════════════════════════════════════════════════════
  // ─── Hoenn (Gen 3) ────────────────────────────────────────────────────────
  // ══════════════════════════════════════════════════════════════════════════

  // MEG Hoenn Pokémon with IR cards

  {
    id: 205,
    name: 'Shuckle',
    type: ['bug', 'rock'],
    height: 0.6,
    weight: 20.5,
    stage: 'basic',
    colors: ['yellow', 'red'],
    evolvesTo: null,
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution',
        set_code: 'MEG',
        card_number: '136/132',
        image_url: 'https://images.scrydex.com/pokemon/me1-136/medium',
      },
    ],
  },

  {
    id: 291,
    name: 'Ninjask',
    type: ['bug', 'flying'],
    height: 0.8,
    weight: 12.0,
    stage: 'stage1',
    colors: ['yellow', 'black'],
    evolvesTo: null,
    evolvesFrom: 'Nincada',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution',
        set_code: 'MEG',
        card_number: '137/132',
        image_url: 'https://images.scrydex.com/pokemon/me1-137/medium',
      },
    ],
  },

  {
    id: 37,
    name: 'Vulpix',
    // NOTE: Vulpix is Gen 1 (#37) but also appears in MEG set as another IR
    // This is the MEG version - the MEW version is already listed under Gen 1
    // Keeping the MEG entry here merged with the primary entry above.
    // → Merged into id:37 entry: see below
    type: ['fire'],
    height: 0.6,
    weight: 9.9,
    stage: 'basic',
    colors: ['orange', 'red', 'cream'],
    evolvesTo: 'Ninetales',
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution',
        set_code: 'MEG',
        card_number: '138/132',
        image_url: 'https://images.scrydex.com/pokemon/me1-138/medium',
      },
    ],
  },

  {
    id: 667,
    name: 'Litleo',
    type: ['fire', 'normal'],
    height: 0.6,
    weight: 13.5,
    stage: 'basic',
    colors: ['orange', 'cream'],
    evolvesTo: 'Pyroar',
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution',
        set_code: 'MEG',
        card_number: '139/132',
        image_url: 'https://images.scrydex.com/pokemon/me1-139/medium',
      },
    ],
  },

  {
    id: 459,
    name: 'Snover',
    type: ['grass', 'ice'],
    height: 1.0,
    weight: 50.5,
    stage: 'basic',
    colors: ['white', 'green'],
    evolvesTo: 'Abomasnow',
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution',
        set_code: 'MEG',
        card_number: '140/132',
        image_url: 'https://images.scrydex.com/pokemon/me1-140/medium',
      },
    ],
  },

  {
    id: 693,
    name: 'Clawitzer',
    type: ['water'],
    height: 1.3,
    weight: 35.3,
    stage: 'stage1',
    colors: ['blue', 'navy'],
    evolvesTo: null,
    evolvesFrom: 'Clauncher',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution',
        set_code: 'MEG',
        card_number: '141/132',
        image_url: 'https://images.scrydex.com/pokemon/me1-141/medium',
      },
    ],
  },

  {
    id: 364,
    name: 'Inteleon',
    // Inteleon is Gen 8 (#818) — appears in MEG
    // Listed here out of strict dex order; reorganize by gen below
    type: ['water'],
    height: 1.9,
    weight: 45.2,
    stage: 'stage2',
    colors: ['blue', 'teal'],
    evolvesTo: null,
    evolvesFrom: 'Drizzile',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution',
        set_code: 'MEG',
        card_number: '142/132',
        image_url: 'https://images.scrydex.com/pokemon/me1-142/medium',
      },
    ],
  },

  {
    id: 694,
    name: 'Helioptile',
    type: ['electric', 'normal'],
    height: 0.5,
    weight: 6.0,
    stage: 'basic',
    colors: ['yellow', 'cream'],
    evolvesTo: 'Heliolisk',
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution',
        set_code: 'MEG',
        card_number: '143/132',
        image_url: 'https://images.scrydex.com/pokemon/me1-143/medium',
      },
    ],
  },

  {
    id: 292,
    name: 'Shedinja',
    type: ['bug', 'ghost'],
    height: 0.8,
    weight: 1.2,
    stage: 'basic',
    colors: ['brown', 'grey'],
    evolvesTo: null,
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution',
        set_code: 'MEG',
        card_number: '144/132',
        image_url: 'https://images.scrydex.com/pokemon/me1-144/medium',
      },
    ],
  },

  {
    id: 997,
    name: 'Houndstone',
    type: ['ghost'],
    height: 2.0,
    weight: 15.0,
    stage: 'stage1',
    colors: ['grey', 'white'],
    evolvesTo: null,
    evolvesFrom: 'Greavard',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution',
        set_code: 'MEG',
        card_number: '145/132',
        image_url: 'https://images.scrydex.com/pokemon/me1-145/medium',
      },
    ],
  },

  {
    id: 802,
    name: 'Marshadow',
    type: ['fighting', 'ghost'],
    height: 0.7,
    weight: 22.2,
    stage: 'basic',
    colors: ['grey', 'black'],
    evolvesTo: null,
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution',
        set_code: 'MEG',
        card_number: '146/132',
        image_url: 'https://images.scrydex.com/pokemon/me1-146/medium',
      },
    ],
  },

  {
    id: 968,
    name: 'Garganacl',
    type: ['rock'],
    height: 2.5,
    weight: 305.0,
    stage: 'stage2',
    colors: ['white', 'pink'],
    evolvesTo: null,
    evolvesFrom: 'Naclstack',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution',
        set_code: 'MEG',
        card_number: '147/132',
        image_url: 'https://images.scrydex.com/pokemon/me1-147/medium',
      },
    ],
  },

  {
    id: 442,
    name: 'Spiritomb',
    type: ['ghost', 'dark'],
    height: 1.0,
    weight: 108.0,
    stage: 'basic',
    colors: ['purple', 'green'],
    evolvesTo: null,
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution',
        set_code: 'MEG',
        card_number: '148/132',
        image_url: 'https://images.scrydex.com/pokemon/me1-148/medium',
      },
    ],
  },

  {
    id: 944,
    name: 'Shroodle',
    type: ['poison', 'normal'],
    height: 0.2,
    weight: 0.7,
    stage: 'basic',
    colors: ['grey', 'yellow'],
    evolvesTo: 'Grafaiai',
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution',
        set_code: 'MEG',
        card_number: '149/132',
        image_url: 'https://images.scrydex.com/pokemon/me1-149/medium',
      },
    ],
  },

  {
    id: 208,
    name: 'Steelix',
    type: ['steel', 'ground'],
    height: 9.2,
    weight: 400.0,
    stage: 'stage1',
    colors: ['grey', 'silver'],
    evolvesTo: null,
    evolvesFrom: 'Onix',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution',
        set_code: 'MEG',
        card_number: '150/132',
        image_url: 'https://images.scrydex.com/pokemon/me1-150/medium',
      },
    ],
  },

  {
    id: 312,
    name: 'Gumshoos',
    type: ['normal'],
    height: 0.7,
    weight: 14.2,
    stage: 'stage1',
    colors: ['brown', 'yellow'],
    evolvesTo: null,
    evolvesFrom: 'Yungoos',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution',
        set_code: 'MEG',
        card_number: '153/132',
        image_url: 'https://images.scrydex.com/pokemon/me1-153/medium',
      },
    ],
  },

  {
    id: 760,
    name: 'Stufful',
    type: ['normal', 'fighting'],
    height: 0.5,
    weight: 6.8,
    stage: 'basic',
    colors: ['pink', 'cream'],
    evolvesTo: 'Bewear',
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution',
        set_code: 'MEG',
        card_number: '154/132',
        image_url: 'https://images.scrydex.com/pokemon/me1-154/medium',
      },
    ],
  },

  // ─── MEG Special Illustration Rare Pokémon (Mega Pokémon ex) ─────────────
  // Note: Mega Venusaur, Gardevoir, Lucario, Absol, Latias, Kangaskhan are SIR
  // These are Mega Evolution forms — not standard species entries.
  // They are captured here with their base species where applicable:

  {
    id: 3, // Venusaur (Mega form)
    name: 'Mega Venusaur',
    type: ['grass', 'poison'],
    height: 2.4,
    weight: 155.5,
    stage: 'mega',
    colors: ['green', 'teal', 'pink'],
    evolvesTo: null,
    evolvesFrom: 'Venusaur',
    cards: [
      {
        rarity: 'Special Illustration Rare',
        set_name: 'Mega Evolution',
        set_code: 'MEG',
        card_number: '177/132',
        image_url: 'https://images.scrydex.com/pokemon/me1-177/medium',
        // NOTE: This SIR number conflicts with Venusaur SIR above (same card number)
        // The MEW Venusaur ex SIR is 198/165. The MEG Mega Venusaur ex SIR is 177/132.
        // Correct: MEW Venusaur ex = 198/165, MEG Mega Venusaur ex = 177/132
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // ─── Sinnoh (Gen 4) ───────────────────────────────────────────────────────
  // ══════════════════════════════════════════════════════════════════════════

  // No confirmed standalone Gen 4 Pokémon IR/SIR cards at this time beyond
  // cross-gen trainer card appearances (e.g. Cynthia's Spiritomb in ASC).

  // ══════════════════════════════════════════════════════════════════════════
  // ─── Unova (Gen 5) ────────────────────────────────────────────────────────
  // ══════════════════════════════════════════════════════════════════════════

  // No confirmed standalone Gen 5 Pokémon IR cards at this time in the
  // listed sets. (SIR Gen 5 Pokémon ex appear in Black Bolt / White Flare
  // but those are 2026 sets — placeholder entries below.)

  // ══════════════════════════════════════════════════════════════════════════
  // ─── Kalos (Gen 6) ────────────────────────────────────────────────────────
  // ══════════════════════════════════════════════════════════════════════════

  // MEG Gardevoir, Absol, Kangaskhan are Kalos-adjacent Mega forms.
  // Mega Gardevoir (Gen 3 origin), Mega Absol (Gen 3), Mega Kangaskhan (Gen 1)

  // ══════════════════════════════════════════════════════════════════════════
  // ─── Alola (Gen 7) ────────────────────────────────────────────────────────
  // ══════════════════════════════════════════════════════════════════════════

  // ══════════════════════════════════════════════════════════════════════════
  // ─── Galar (Gen 8) ────────────────────────────────────────────────────────
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: 818,
    name: 'Inteleon',
    type: ['water'],
    height: 1.9,
    weight: 45.2,
    stage: 'stage2',
    colors: ['blue', 'teal'],
    evolvesTo: null,
    evolvesFrom: 'Drizzile',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution',
        set_code: 'MEG',
        card_number: '142/132',
        image_url: 'https://images.scrydex.com/pokemon/me1-142/medium',
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // ─── Paldea (Gen 9) ───────────────────────────────────────────────────────
  // ══════════════════════════════════════════════════════════════════════════

  // SIR Paldea starters & legendaries appear in SVI, PAL, OBF, PAF, etc.
  // Only Pokémon (not Trainer/Supporter SIRs) are included per scope.

  {
    id: 1003,
    name: 'Miraidon',
    type: ['electric', 'dragon'],
    height: 3.5,
    weight: 240.0,
    stage: 'basic',
    colors: ['teal', 'purple'],
    evolvesTo: null,
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Special Illustration Rare',
        set_name: 'Scarlet & Violet',
        set_code: 'SVI',
        card_number: '244/198',
        image_url: '',
      },
    ],
  },

  {
    id: 1007,
    name: 'Koraidon',
    type: ['fighting', 'dragon'],
    height: 2.5,
    weight: 303.0,
    stage: 'basic',
    colors: ['red', 'orange'],
    evolvesTo: null,
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Special Illustration Rare',
        set_name: 'Scarlet & Violet',
        set_code: 'SVI',
        card_number: '247/198',
        image_url: '',
      },
    ],
  },

  {
    id: 282,
    name: 'Gardevoir',
    type: ['psychic', 'fairy'],
    height: 1.6,
    weight: 48.4,
    stage: 'stage2',
    colors: ['white', 'green'],
    evolvesTo: null,
    evolvesFrom: 'Kirlia',
    cards: [
      {
        rarity: 'Special Illustration Rare',
        set_name: 'Scarlet & Violet',
        set_code: 'SVI',
        card_number: '245/198',
        image_url: '',
      },
      {
        rarity: 'Special Illustration Rare',
        set_name: 'Scarlet & Violet-Paldean Fates',
        set_code: 'PAF',
        card_number: '233/091',
        image_url: '',
      },
      {
        rarity: 'Special Illustration Rare',
        set_name: 'Mega Evolution',
        set_code: 'MEG',
        card_number: '178/132',
        image_url: 'https://images.scrydex.com/pokemon/me1-178/medium',
      },
    ],
  },

  {
    id: 996,
    name: 'Great Tusk',
    type: ['fighting', 'ground'],
    height: 2.2,
    weight: 320.0,
    stage: 'basic',
    colors: ['brown', 'white'],
    evolvesTo: null,
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Special Illustration Rare',
        set_name: 'Scarlet & Violet',
        set_code: 'SVI',
        card_number: '246/198',
        image_url: '',
      },
    ],
  },

  {
    id: 975,
    name: 'Iron Treads',
    type: ['ground', 'steel'],
    height: 0.9,
    weight: 240.0,
    stage: 'basic',
    colors: ['grey', 'blue'],
    evolvesTo: null,
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Special Illustration Rare',
        set_name: 'Scarlet & Violet',
        set_code: 'SVI',
        card_number: '248/198',
        image_url: '',
      },
    ],
  },

  {
    id: 975,
    name: 'Spidops',
    type: ['bug'],
    height: 1.0,
    weight: 16.5,
    stage: 'stage1',
    colors: ['brown', 'red'],
    evolvesTo: null,
    evolvesFrom: 'Tarountula',
    cards: [
      {
        rarity: 'Special Illustration Rare',
        set_name: 'Scarlet & Violet',
        set_code: 'SVI',
        card_number: '243/198',
        image_url: '',
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // ─── Phantasmal Flames (PFL) — Multi-gen IR Pokémon ───────────────────────
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: 52,
    name: 'Meowth',
    type: ['normal'],
    height: 0.4,
    weight: 4.2,
    stage: 'basic',
    colors: ['cream', 'brown'],
    evolvesTo: 'Persian',
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Phantasmal Flames',
        set_code: 'PFL',
        card_number: '106/094',
        image_url: 'https://images.scrydex.com/pokemon/me2-106/medium',
      },
    ],
  },

  {
    id: 40,
    name: 'Wigglytuff',
    type: ['normal', 'fairy'],
    height: 1.0,
    weight: 12.0,
    stage: 'stage1',
    colors: ['pink', 'cream'],
    evolvesTo: null,
    evolvesFrom: 'Jigglypuff',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Phantasmal Flames',
        set_code: 'PFL',
        card_number: '105/094',
        image_url: 'https://images.scrydex.com/pokemon/me2-105/medium',
      },
    ],
  },

  {
    id: 87,
    name: 'Dewgong',
    type: ['water', 'ice'],
    height: 1.7,
    weight: 120.0,
    stage: 'stage1',
    colors: ['white', 'blue'],
    evolvesTo: null,
    evolvesFrom: 'Seel',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Phantasmal Flames',
        set_code: 'PFL',
        card_number: '097/094',
        image_url: 'https://images.scrydex.com/pokemon/me2-97/medium',
      },
    ],
  },

  {
    id: 341,
    name: 'Nymble',
    type: ['bug'],
    height: 0.2,
    weight: 1.0,
    stage: 'basic',
    colors: ['brown', 'green'],
    evolvesTo: 'Lokix',
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Phantasmal Flames',
        set_code: 'PFL',
        card_number: '096/094',
        image_url: 'https://images.scrydex.com/pokemon/me2-96/medium',
      },
    ],
  },

  {
    id: 272,
    name: 'Ludicolo',
    type: ['water', 'grass'],
    height: 1.5,
    weight: 55.0,
    stage: 'stage2',
    colors: ['green', 'yellow'],
    evolvesTo: null,
    evolvesFrom: 'Lombre',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Phantasmal Flames',
        set_code: 'PFL',
        card_number: '095/094',
        image_url: 'https://images.scrydex.com/pokemon/me2-95/medium',
      },
    ],
  },

  {
    id: 335,
    name: 'Flygon',
    type: ['ground', 'dragon'],
    height: 2.0,
    weight: 82.0,
    stage: 'stage2',
    colors: ['green', 'red'],
    evolvesTo: null,
    evolvesFrom: 'Vibrava',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Phantasmal Flames',
        set_code: 'PFL',
        card_number: '101/094',
        image_url: 'https://images.scrydex.com/pokemon/me2-101/medium',
      },
    ],
  },

  {
    id: 717,
    name: 'Zacian',
    type: ['fairy'],
    height: 2.8,
    weight: 110.0,
    stage: 'basic',
    colors: ['blue', 'gold'],
    evolvesTo: null,
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Phantasmal Flames',
        set_code: 'PFL',
        card_number: '100/094',
        image_url: 'https://images.scrydex.com/pokemon/me2-100/medium',
      },
    ],
  },

  {
    id: 835,
    name: 'Yamper',
    type: ['electric'],
    height: 0.3,
    weight: 13.5,
    stage: 'basic',
    colors: ['yellow', 'brown'],
    evolvesTo: 'Boltund',
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Phantasmal Flames',
        set_code: 'PFL',
        card_number: '099/094',
        image_url: 'https://images.scrydex.com/pokemon/me2-99/medium',
      },
    ],
  },

  {
    id: 393,
    name: 'Piplup',
    type: ['water'],
    height: 0.4,
    weight: 5.2,
    stage: 'basic',
    colors: ['blue', 'navy'],
    evolvesTo: 'Prinplup',
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Phantasmal Flames',
        set_code: 'PFL',
        card_number: '098/094',
        image_url: 'https://images.scrydex.com/pokemon/me2-98/medium',
      },
    ],
  },

  {
    id: 424,
    name: 'Ambipom',
    type: ['normal'],
    height: 1.2,
    weight: 20.3,
    stage: 'stage1',
    colors: ['purple', 'cream'],
    evolvesTo: null,
    evolvesFrom: 'Aipom',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Phantasmal Flames',
        set_code: 'PFL',
        card_number: '107/094',
        image_url: 'https://images.scrydex.com/pokemon/me2-107/medium',
      },
    ],
  },

  {
    id: 500,
    name: 'Togedemaru',
    type: ['electric', 'steel'],
    height: 0.3,
    weight: 3.3,
    stage: 'basic',
    colors: ['white', 'grey'],
    evolvesTo: null,
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Phantasmal Flames',
        set_code: 'PFL',
        card_number: '104/094',
        image_url: 'https://images.scrydex.com/pokemon/me2-104/medium',
      },
    ],
  },

  {
    id: 849,
    name: 'Toxtricity',
    type: ['electric', 'poison'],
    height: 1.6,
    weight: 40.0,
    stage: 'stage1',
    colors: ['purple', 'yellow'],
    evolvesTo: null,
    evolvesFrom: 'Toxel',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Phantasmal Flames',
        set_code: 'PFL',
        card_number: '103/094',
        image_url: 'https://images.scrydex.com/pokemon/me2-103/medium',
      },
    ],
  },

  {
    id: 980,
    name: 'Paldean Wooper',
    type: ['poison', 'ground'],
    height: 0.4,
    weight: 11.0,
    stage: 'basic',
    colors: ['brown', 'cream'],
    evolvesTo: 'Clodsire',
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Phantasmal Flames',
        set_code: 'PFL',
        card_number: '102/094',
        image_url: 'https://images.scrydex.com/pokemon/me2-102/medium',
      },
    ],
  },

  // ── PFL SIR: Charizard ex is already listed under Gen 1 Charizard above ──

  // ══════════════════════════════════════════════════════════════════════════
  // ─── Ascended Heroes (ASC) — Multi-gen IR Pokémon ─────────────────────────
  // Note: ASC card numbers have not been fully verified on Scrydex.
  // image_url left as '' for all ASC entries. Fill from scrydex.com manually.
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: 166,
    name: 'Fan Rotom',
    type: ['electric', 'flying'],
    height: 0.3,
    weight: 0.3,
    stage: 'basic',
    colors: ['teal', 'yellow'],
    evolvesTo: null,
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Ascended Heroes',
        set_code: 'ASC',
        card_number: '250/[VERIFY]',
        image_url: '',
      },
    ],
  },

  {
    id: 398,
    name: "Larry's Staraptor",
    type: ['normal', 'flying'],
    height: 1.2,
    weight: 24.9,
    stage: 'stage2',
    colors: ['grey', 'brown'],
    evolvesTo: null,
    evolvesFrom: 'Staravia',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Ascended Heroes',
        set_code: 'ASC',
        card_number: '249/[VERIFY]',
        image_url: '',
      },
    ],
  },

  {
    id: 886,
    name: 'Drakloak',
    type: ['dragon', 'ghost'],
    height: 1.4,
    weight: 11.0,
    stage: 'stage1',
    colors: ['blue', 'grey'],
    evolvesTo: 'Dragapult',
    evolvesFrom: 'Dreepy',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Ascended Heroes',
        set_code: 'ASC',
        card_number: '248/[VERIFY]',
        image_url: '',
      },
    ],
  },

  {
    id: 885,
    name: 'Dreepy',
    type: ['dragon', 'ghost'],
    height: 0.5,
    weight: 2.0,
    stage: 'basic',
    colors: ['teal', 'grey'],
    evolvesTo: 'Drakloak',
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Ascended Heroes',
        set_code: 'ASC',
        card_number: '247/[VERIFY]',
        image_url: '',
      },
    ],
  },

  {
    id: 303,
    name: 'Mawile',
    type: ['steel', 'fairy'],
    height: 0.6,
    weight: 11.5,
    stage: 'basic',
    colors: ['black', 'yellow'],
    evolvesTo: null,
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Ascended Heroes',
        set_code: 'ASC',
        card_number: '246/[VERIFY]',
        image_url: '',
      },
    ],
  },

  {
    id: 862,
    name: 'Galarian Obstagoon',
    type: ['dark', 'normal'],
    height: 1.6,
    weight: 46.0,
    stage: 'stage2',
    colors: ['black', 'white'],
    evolvesTo: null,
    evolvesFrom: 'Galarian Linoone',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Ascended Heroes',
        set_code: 'ASC',
        card_number: '245/[VERIFY]',
        image_url: '',
      },
    ],
  },

  {
    id: 442,
    name: "Cynthia's Spiritomb",
    type: ['ghost', 'dark'],
    height: 1.0,
    weight: 108.0,
    stage: 'basic',
    colors: ['purple', 'green'],
    evolvesTo: null,
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Ascended Heroes',
        set_code: 'ASC',
        card_number: '244/[VERIFY]',
        image_url: '',
      },
    ],
  },

  {
    id: 262,
    name: 'Mightyena',
    type: ['dark'],
    height: 1.0,
    weight: 37.0,
    stage: 'stage1',
    colors: ['grey', 'black'],
    evolvesTo: null,
    evolvesFrom: 'Poochyena',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Ascended Heroes',
        set_code: 'ASC',
        card_number: '243/[VERIFY]',
        image_url: '',
      },
    ],
  },

  {
    id: 703,
    name: 'Carbink',
    type: ['rock', 'fairy'],
    height: 0.3,
    weight: 5.7,
    stage: 'basic',
    colors: ['blue', 'white'],
    evolvesTo: null,
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Ascended Heroes',
        set_code: 'ASC',
        card_number: '242/[VERIFY]',
        image_url: '',
      },
    ],
  },

  {
    id: 308,
    name: 'Medicham',
    type: ['fighting', 'psychic'],
    height: 1.3,
    weight: 31.5,
    stage: 'stage1',
    colors: ['red', 'cream'],
    evolvesTo: null,
    evolvesFrom: 'Meditite',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Ascended Heroes',
        set_code: 'ASC',
        card_number: '241/[VERIFY]',
        image_url: '',
      },
    ],
  },

  {
    id: 237,
    name: 'Hitmontop',
    type: ['fighting'],
    height: 1.4,
    weight: 48.0,
    stage: 'basic',
    colors: ['brown', 'cream'],
    evolvesTo: null,
    evolvesFrom: 'Tyrogue',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Ascended Heroes',
        set_code: 'ASC',
        card_number: '240/[VERIFY]',
        image_url: '',
      },
    ],
  },

  {
    id: 51,
    name: "Team Rocket's Dugtrio",
    type: ['ground'],
    height: 0.7,
    weight: 33.3,
    stage: 'stage1',
    colors: ['brown', 'cream'],
    evolvesTo: null,
    evolvesFrom: 'Diglett',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Ascended Heroes',
        set_code: 'ASC',
        card_number: '239/[VERIFY]',
        image_url: '',
      },
    ],
  },

  {
    id: 778,
    name: "Team Rocket's Mimikyu",
    type: ['ghost', 'fairy'],
    height: 0.2,
    weight: 0.7,
    stage: 'basic',
    colors: ['yellow', 'brown'],
    evolvesTo: null,
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Ascended Heroes',
        set_code: 'ASC',
        card_number: '238/[VERIFY]',
        image_url: '',
      },
    ],
  },

  {
    id: 709,
    name: "Hop's Trevenant",
    type: ['ghost', 'grass'],
    height: 1.5,
    weight: 71.0,
    stage: 'stage1',
    colors: ['brown', 'red'],
    evolvesTo: null,
    evolvesFrom: 'Phantump',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Ascended Heroes',
        set_code: 'ASC',
        card_number: '237/[VERIFY]',
        image_url: '',
      },
    ],
  },

  {
    id: 685,
    name: 'Slurpuff',
    type: ['fairy'],
    height: 0.8,
    weight: 5.0,
    stage: 'stage1',
    colors: ['pink', 'cream'],
    evolvesTo: null,
    evolvesFrom: 'Swirlix',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Ascended Heroes',
        set_code: 'ASC',
        card_number: '236/[VERIFY]',
        image_url: '',
      },
    ],
  },

  {
    id: 468,
    name: 'Togekiss',
    type: ['fairy', 'flying'],
    height: 1.5,
    weight: 38.0,
    stage: 'stage2',
    colors: ['white', 'red'],
    evolvesTo: null,
    evolvesFrom: 'Togetic',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Ascended Heroes',
        set_code: 'ASC',
        card_number: '235/[VERIFY]',
        image_url: '',
      },
    ],
  },

  {
    id: 354,
    name: 'Banette',
    type: ['ghost'],
    height: 1.1,
    weight: 12.5,
    stage: 'stage1',
    colors: ['purple', 'black'],
    evolvesTo: null,
    evolvesFrom: 'Shuppet',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Ascended Heroes',
        set_code: 'ASC',
        card_number: '234/[VERIFY]',
        image_url: '',
      },
    ],
  },

  {
    id: 200,
    name: 'Misdreavus',
    type: ['ghost'],
    height: 0.7,
    weight: 1.0,
    stage: 'basic',
    colors: ['grey', 'purple'],
    evolvesTo: 'Mismagius',
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Ascended Heroes',
        set_code: 'ASC',
        card_number: '233/[VERIFY]',
        image_url: '',
      },
    ],
  },

  {
    id: 183,
    name: 'Marill',
    type: ['water', 'fairy'],
    height: 0.4,
    weight: 8.5,
    stage: 'basic',
    colors: ['blue', 'white'],
    evolvesTo: 'Azumarill',
    evolvesFrom: 'Azurill',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Ascended Heroes',
        set_code: 'ASC',
        card_number: '232/[VERIFY]',
        image_url: '',
      },
    ],
  },

  {
    id: 694,
    name: "Iono's Wattrel",
    type: ['electric', 'flying'],
    height: 0.4,
    weight: 3.6,
    stage: 'basic',
    colors: ['teal', 'white'],
    evolvesTo: 'Kilowattrel',
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Ascended Heroes',
        set_code: 'ASC',
        card_number: '231/[VERIFY]',
        image_url: '',
      },
    ],
  },

  {
    id: 738,
    name: 'Vikavolt',
    type: ['bug', 'electric'],
    height: 1.5,
    weight: 45.0,
    stage: 'stage2',
    colors: ['blue', 'yellow'],
    evolvesTo: null,
    evolvesFrom: 'Charjabug',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Ascended Heroes',
        set_code: 'ASC',
        card_number: '230/[VERIFY]',
        image_url: '',
      },
    ],
  },

  {
    id: 695,
    name: 'Heliolisk',
    type: ['electric', 'normal'],
    height: 1.0,
    weight: 21.0,
    stage: 'stage1',
    colors: ['yellow', 'cream'],
    evolvesTo: null,
    evolvesFrom: 'Helioptile',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Ascended Heroes',
        set_code: 'ASC',
        card_number: '229/[VERIFY]',
        image_url: '',
      },
    ],
  },

  {
    id: 461,
    name: 'Weavile',
    type: ['dark', 'ice'],
    height: 1.1,
    weight: 34.0,
    stage: 'stage1',
    colors: ['black', 'red'],
    evolvesTo: null,
    evolvesFrom: 'Sneasel',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Ascended Heroes',
        set_code: 'ASC',
        card_number: '228/[VERIFY]',
        image_url: '',
      },
    ],
  },

  {
    id: 361,
    name: 'Snorunt',
    type: ['ice'],
    height: 0.7,
    weight: 16.8,
    stage: 'basic',
    colors: ['grey', 'white'],
    evolvesTo: 'Glalie',
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Ascended Heroes',
        set_code: 'ASC',
        card_number: '227/[VERIFY]',
        image_url: '',
      },
    ],
  },

  {
    id: 513,
    name: 'Scorbunny',
    type: ['fire'],
    height: 0.3,
    weight: 4.5,
    stage: 'basic',
    colors: ['white', 'orange'],
    evolvesTo: 'Raboot',
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Ascended Heroes',
        set_code: 'ASC',
        card_number: '225/[VERIFY]',
        image_url: '',
      },
    ],
  },

  {
    id: 758,
    name: 'Salazzle',
    type: ['poison', 'fire'],
    height: 1.2,
    weight: 22.2,
    stage: 'stage1',
    colors: ['purple', 'black'],
    evolvesTo: null,
    evolvesFrom: 'Salandit',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Ascended Heroes',
        set_code: 'ASC',
        card_number: '224/[VERIFY]',
        image_url: '',
      },
    ],
  },

  {
    id: 322,
    name: 'Numel',
    type: ['fire', 'ground'],
    height: 0.7,
    weight: 24.0,
    stage: 'basic',
    colors: ['yellow', 'brown'],
    evolvesTo: 'Camerupt',
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Ascended Heroes',
        set_code: 'ASC',
        card_number: '223/[VERIFY]',
        image_url: '',
      },
    ],
  },

  {
    id: 219,
    name: "Ethan's Magcargo",
    type: ['fire', 'rock'],
    height: 0.8,
    weight: 55.0,
    stage: 'stage1',
    colors: ['red', 'grey'],
    evolvesTo: null,
    evolvesFrom: 'Slugma',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Ascended Heroes',
        set_code: 'ASC',
        card_number: '222/[VERIFY]',
        image_url: '',
      },
    ],
  },

  {
    id: 406,
    name: 'Budew',
    type: ['grass', 'poison'],
    height: 0.2,
    weight: 1.2,
    stage: 'basic',
    colors: ['green', 'red'],
    evolvesTo: 'Roselia',
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Ascended Heroes',
        set_code: 'ASC',
        card_number: '221/[VERIFY]',
        image_url: '',
      },
    ],
  },

  {
    id: 269,
    name: 'Dustox',
    type: ['bug', 'poison'],
    height: 1.2,
    weight: 31.6,
    stage: 'stage2',
    colors: ['purple', 'green'],
    evolvesTo: null,
    evolvesFrom: 'Cascoon',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Ascended Heroes',
        set_code: 'ASC',
        card_number: '220/[VERIFY]',
        image_url: '',
      },
    ],
  },

  {
    id: 267,
    name: 'Beautifly',
    type: ['bug', 'flying'],
    height: 1.0,
    weight: 28.4,
    stage: 'stage2',
    colors: ['yellow', 'red'],
    evolvesTo: null,
    evolvesFrom: 'Silcoon',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Ascended Heroes',
        set_code: 'ASC',
        card_number: '219/[VERIFY]',
        image_url: '',
      },
    ],
  },

  {
    id: 114, // Tangela – already listed above, ASC card merged here
    name: "Erika's Tangela",
    type: ['grass'],
    height: 1.0,
    weight: 35.0,
    stage: 'basic',
    colors: ['blue', 'green'],
    evolvesTo: 'Tangrowth',
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Ascended Heroes',
        set_code: 'ASC',
        card_number: '218/[VERIFY]',
        image_url: '',
      },
    ],
  },

  // ══════════════════════════════════════════════════════════════════════════
  // ─── Perfect Order (POR) — Multi-gen IR Pokémon ───────────────────────────
  // Note: POR card numbers verified from pkmncards.com listing.
  // image_url pattern would be me3-{number}/medium — verify before use.
  // ══════════════════════════════════════════════════════════════════════════

  {
    id: 20,
    name: 'Raticate',
    type: ['normal'],
    height: 0.7,
    weight: 18.5,
    stage: 'stage1',
    colors: ['cream', 'brown'],
    evolvesTo: null,
    evolvesFrom: 'Rattata',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Perfect Order',
        set_code: 'POR',
        card_number: '099/[VERIFY]',
        image_url: '',
      },
    ],
  },

  {
    id: 681,
    name: 'Doublade',
    type: ['steel', 'ghost'],
    height: 0.8,
    weight: 4.5,
    stage: 'stage1',
    colors: ['grey', 'purple'],
    evolvesTo: 'Aegislash',
    evolvesFrom: 'Honedge',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Perfect Order',
        set_code: 'POR',
        card_number: '098/[VERIFY]',
        image_url: '',
      },
    ],
  },

  {
    id: 452,
    name: 'Drapion',
    type: ['poison', 'dark'],
    height: 1.3,
    weight: 61.5,
    stage: 'stage1',
    colors: ['purple', 'blue'],
    evolvesTo: null,
    evolvesFrom: 'Skorupi',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Perfect Order',
        set_code: 'POR',
        card_number: '097/[VERIFY]',
        image_url: '',
      },
    ],
  },

  {
    id: 476,
    name: 'Probopass',
    type: ['rock', 'steel'],
    height: 1.4,
    weight: 340.0,
    stage: 'stage1',
    colors: ['grey', 'red'],
    evolvesTo: null,
    evolvesFrom: 'Nosepass',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Perfect Order',
        set_code: 'POR',
        card_number: '096/[VERIFY]',
        image_url: '',
      },
    ],
  },

  {
    id: 677,
    name: 'Espurr',
    type: ['psychic'],
    height: 0.3,
    weight: 3.5,
    stage: 'basic',
    colors: ['grey', 'purple'],
    evolvesTo: 'Meowstic',
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Perfect Order',
        set_code: 'POR',
        card_number: '095/[VERIFY]',
        image_url: '',
      },
    ],
  },

  {
    id: 35,
    name: 'Clefairy',
    type: ['fairy'],
    height: 0.6,
    weight: 7.5,
    stage: 'basic',
    colors: ['pink', 'cream'],
    evolvesTo: 'Clefable',
    evolvesFrom: 'Cleffa',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Perfect Order',
        set_code: 'POR',
        card_number: '094/[VERIFY]',
        image_url: '',
      },
    ],
  },

  {
    id: 702,
    name: 'Dedenne',
    type: ['electric', 'fairy'],
    height: 0.2,
    weight: 2.2,
    stage: 'basic',
    colors: ['orange', 'cream'],
    evolvesTo: null,
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Perfect Order',
        set_code: 'POR',
        card_number: '093/[VERIFY]',
        image_url: '',
      },
    ],
  },

  {
    id: 698,
    name: 'Aurorus',
    type: ['rock', 'ice'],
    height: 2.7,
    weight: 225.0,
    stage: 'stage1',
    colors: ['blue', 'white'],
    evolvesTo: null,
    evolvesFrom: 'Amaura',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Perfect Order',
        set_code: 'POR',
        card_number: '092/[VERIFY]',
        image_url: '',
      },
    ],
  },

  {
    id: 663,
    name: 'Talonflame',
    type: ['fire', 'flying'],
    height: 1.2,
    weight: 24.5,
    stage: 'stage2',
    colors: ['red', 'orange'],
    evolvesTo: null,
    evolvesFrom: 'Fletchinder',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Perfect Order',
        set_code: 'POR',
        card_number: '091/[VERIFY]',
        image_url: '',
      },
    ],
  },

  {
    id: 722,
    name: 'Rowlet',
    type: ['grass', 'flying'],
    height: 0.3,
    weight: 1.5,
    stage: 'basic',
    colors: ['green', 'white'],
    evolvesTo: 'Dartrix',
    evolvesFrom: null,
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Perfect Order',
        set_code: 'POR',
        card_number: '090/[VERIFY]',
        image_url: '',
      },
    ],
  },

  {
    id: 664,
    name: 'Spewpa',
    type: ['bug'],
    height: 0.3,
    weight: 8.4,
    stage: 'stage1',
    colors: ['white', 'cream'],
    evolvesTo: 'Vivillon',
    evolvesFrom: 'Scatterbug',
    cards: [
      {
        rarity: 'Illustration Rare',
        set_name: 'Mega Evolution-Perfect Order',
        set_code: 'POR',
        card_number: '089/[VERIFY]',
        image_url: '',
      },
    ],
  },
];
