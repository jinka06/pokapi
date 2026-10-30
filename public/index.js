const res = await fetch('/api/cards');
const pokemon = await res.json();

const container = document.getElementById('cardsContainer');
const countEl = document.getElementById('cardsCount');
const searchEl = document.getElementById('search')
const filterEl = document.getElementById('filterBy')
const valueEl = document.getElementById('filterValue')

const allCards = pokemon.flatMap(pkmn =>
  pkmn.cards.map(card => ({ pkmn, card }))
);

const rarityClass = rarity =>
  rarity.toLowerCase().includes('special')
    ? 'card-rarity-sir'
    : 'card-rarity-ir';

const rarityShort = rarity =>
  rarity.toLowerCase().includes('special') ? 'SIR' : 'IR';

const cardHtml = ({ pkmn, card }) => `
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
`;

const label = value =>
  String(value)
    .replace(/([a-z])(\d)/i, '$1 $2')
    .replace(/^./, c => c.toUpperCase());

const optionsFor = key =>
  [...new Set(pokemon.flatMap(p => [].concat(p[key] ?? [])))].sort();
 
const render = () => {
  const query = searchEl.value.trim().toLowerCase();
  const key = filterEl.value;
  const chosen = valueEl.value;
 
  const shown = allCards.filter(({ pkmn }) => {
    const nameOk = !query || pkmn.name.toLowerCase().includes(query);
    const attrOk = !key || !chosen || [].concat(pkmn[key] ?? []).includes(chosen);
    return nameOk && attrOk;
  });
 
  const pokemonCount = new Set(shown.map(({ pkmn }) => pkmn.name)).size;
  countEl.textContent = `${shown.length} cards · ${pokemonCount} Pokémon`;
 
  container.innerHTML = shown.length
    ? shown.map(cardHtml).join('')
    : '<p class="no-results">No cards match your search.</p>';
};

filterEl.addEventListener('change', () => {
  const key = filterEl.value;
  if (!key) {
    valueEl.hidden = true;
    valueEl.innerHTML = '';
  } else {
    valueEl.innerHTML =
      `<option value="">All</option>` +
      optionsFor(key)
        .map(v => `<option value="${v}">${label(v)}</option>`)
        .join('');
    valueEl.hidden = false;
  }
  render();
});
 
valueEl.addEventListener('change', render);
searchEl.addEventListener('input', render);
 
render();