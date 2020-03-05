const express = require('express')
const cors = require('cors')
const grassCtrl = require('./controllers/grassController')
const pokemonCtrl = require('./controllers/pokemonController')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/wild-pokemon', grassCtrl.getWildPokemon)
app.get('/api/pokemon', pokemonCtrl.getCaughtPokemon)
app.post('/api/pokemon', pokemonCtrl.catchPokemon)
app.put('/api/pokemon/:id', pokemonCtrl.editPokemonName)
app.delete('/api/pokemon/:id', pokemonCtrl.releasePokemon)

const Port = 4010;
app.listen(Port, () => console.log(`Server is running on port ${Port}`))

