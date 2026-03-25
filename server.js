import express from 'express'
import { pokemon } from './data/data.js'

const PORT = 8000

const app = express()

app.get('/cards', (req, res) => {
    let filteredData = pokemon
    if(req.query.type) {
        filteredData = filteredData.filter(p => p.type.includes(req.query.type))
    }
    if(req.query.stage) {
        filteredData = filteredData.filter(p => p.stage === req.query.stage)
    }
    if(req.query.color) {
        filteredData = filteredData.filter(p => p.colors.includes(req.query.color))
    }
    if(req.query.name) {
        filteredData = filteredData.filter(p => p.name === req.query.name)
    }
    if(req.query.rarity){
        filteredData = filteredData.filter(p => p.cards.some(card => card.rarity === req.query.rarity))
    }
    if(req.query.set_name){
        filteredData = filteredData.filter(p => p.cards.some(card => card.set_name === req.query.set_name))
    }

    res.json(filteredData)
})

app.get('/:category/:item', (req, res) => {
    const { category, item } = req.params
    let filteredData = pokemon
    if(req.params.category === 'type' || req.params.category === 'colors') {
        filteredData = filteredData.filter(p => p[category].includes(item)) 
    }
    else if(req.params.category === 'stage' || req.params.category === 'name' || req.params.category === 'evolvesTo' || req.params.category === 'evolvesFrom' || req.params.category === 'height' || req.params.category === 'weight') {
        filteredData = filteredData.filter(p => p[category] === item)
    }
    res.json(filteredData)

})

app.get('/cards/:attribute/:value', (req, res) => {
    const { attribute, value } = req.params
    let filteredData = pokemon
    if(req.params.value){
        filteredData = filteredData.filter(p => p.cards.some(card => card[attribute] === value))
    }
    res.json(filteredData)
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})