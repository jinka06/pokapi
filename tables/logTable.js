import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'node:path';

async function viewAllPokemons() {
    const db = await open({
        filename: path.join('database.db'),
        driver: sqlite3.Database
})
    try {const pokemons = await db.all('SELECT * FROM pokemons');

    const displayAllPokemons = pokemons.map(({name, type, height, weight, colors, stage}) => {
        return {name, type, height, weight, colors, stage}
    });

    console.log(displayAllPokemons);}
    catch(err){
        console.error('Error fetching pokemons:', err.message);
    }
    finally {
        await db.close();
        console.log('Database connection closed');
    }
}

viewAllPokemons();