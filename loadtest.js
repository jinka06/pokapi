import http from 'k6/http';
import { check, sleep } from 'k6';

const BASE_URL = __ENV.BASE_URL;

let stages = [
  { duration: '1m', target: 50 },
  { duration: '3m', target: 200 },
  { duration: '2m', target: 200 },
  { duration: '1m', target: 0 },
];

if (__ENV.PROFILE === 'smoke') {
  stages = [
    { duration: '10s', target: 5 },
    { duration: '20s', target: 5 },
  ];
}

export const options = {
  stages,
  thresholds: {
    http_req_failed: ['rate<0.01'],
    'http_req_duration{expected_response:true}': ['p(95)<500'],
  },
};

export default function () {
  const random = Math.floor(Math.random() * 100) + 1;
  let url = `${BASE_URL}`;
  const types = [
    'fire',
    'water',
    'grass',
    'ghost',
    'fairy',
    'poison',
    'ground',
    'steel',
    'electric',
    'dragon',
    'dark',
    'psychic',
    'rock',
    'ice',
    'fighting',
    'normal',
    'flying',
    'bug',
  ];
  const randomType = Math.floor(Math.random() * types.length);

  if (random < 20) {
    url = `${BASE_URL}/`;
  } else if (random < 55) {
    url = `${BASE_URL}/api/cards`;
  } else if (random < 75) {
    url = `${BASE_URL}/api/cards/type/${types[randomType]}`;
  } else if (random < 85) {
    url = `${BASE_URL}/api/cards/stage/basic`;
  } else {
    url = `${BASE_URL}/api/cards/attribute/rarity/Promo`;
  }

  const res = http.get(url);

  if (res.status === 200) {
    console.log(`SUCCESS: ${url} was reached | Random = ${random}.`);
  } else if (res.status !== 200) {
    console.log(
      `FAIL: ${url} returned status ${res.status} | Random = ${random}.`
    );
  }
  check(res, { 'status 200': r => r.status === 200 });
  sleep(1);
}
