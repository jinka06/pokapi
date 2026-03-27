import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'node:path';
import { pokemons } from '../data/data.js';

async function seedTable() {
  const db = await open({
    filename: path.join(process.cwd(), 'db.sqlite'),
    driver: sqlite3.Database,
  })

  try {
    await db.exec('BEGIN TRANSACTION');

    for(const {name, type, height, weight, colors, stage} of pokemons) {
      await db.run(`
        INSERT INTO pokemons (name, type, height, weight, colors, stage) VALUES (?, ?, ?, ?, ?, ?)
      `, [name, type, height, weight, colors, stage]);
    }

    await db.exec('COMMIT');
    console.log('Data inserted successfully');
  }
  catch (error) {    
    await db.exec('ROLLBACK');
    console.error('Error inserting data:', error.message);
    }
finally {
    await db.close();
    console.log('Database connection closed');
  }
}

seedTable();
