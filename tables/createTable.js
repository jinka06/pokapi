import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'node:path';

async function createTable() {
  const db = await open({
    filename: path.join('database.db'),
    driver: sqlite3.Database,
  })

    await db.exec(`CREATE TABLE IF NOT EXISTS pokemons (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL UNIQUE,
      type TEXT NOT NULL,
      height INTEGER NOT NULL,
      weight INTEGER NOT NULL,
      colors TEXT NOT NULL,
      stage TEXT NOT NULL,

    )`)
    console.log('Table created successfully');
    await db.close();
}

createTable()