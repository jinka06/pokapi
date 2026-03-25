import express from 'express'

const PORT = 8000

const app = express()

const pok = {
    type: "Fire",
    name: "Charmander",
    level: 5
}

app.get('/', (req, res) => {
    res.json(pok)
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})