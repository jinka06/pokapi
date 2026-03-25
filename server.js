import express from 'express'
import { pokemon } from './data/data.js'

const PORT = 8000

const app = express()

app.get('/api', (req, res) => {
    res.json(pokemon)
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})