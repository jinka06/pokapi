import { pokemon } from './data.js';

const container = document.getElementById('cardsContainer');
const countEl = document.getElementById('cardsCount');

const allCards = pokemon.flatMap(pkmn =>
  pkmn.cards.map(card => ({ pkmn, card }))
);

countEl.textContent = `${allCards.length} cards · ${pokemon.length} Pokémon`;

const rarityClass = rarity =>
  rarity.toLowerCase().includes('special')
    ? 'card-rarity-sir'
    : 'card-rarity-ir';

const rarityShort = rarity =>
  rarity.toLowerCase().includes('special') ? 'SIR' : 'IR';

const html = allCards
  .map(
    ({ pkmn, card }) => `
  <div class="pokemon-card">
    <div class="toploader">
      <div class="toploader-outer">
        <div class="toploader-inner">
          <img
            class="card-img"
            src="${card.image_url}"
            alt="${pkmn.name} â€” ${card.set_name}"
            loading="lazy"
          />
        </div>
      </div>
    </div>

    <div class="card-info">
      <div class="card-name">${pkmn.name}</div>
      <div class="card-meta pokemon-characteristics">
        <span>H: ${pkmn.height}m</span>
        <span>W: ${pkmn.weight}kg</span>
      </div>
      <div class="card-set-tag ${rarityClass(card.rarity)}">
        ${rarityShort(card.rarity)} · ${card.set_code} #${card.card_number}
      </div>
      <div class="card-set-tag" style="color: white; margin-top:2px;">
        ${card.set_name}
      </div>
    </div>
  </div>
`
  )
  .join('');

container.innerHTML = html;
