const express = require('express')

const app = express()

const prof1 = require('./json/1.json')
const prof2 = require('./json/2.json')
const profiles = [prof1, prof2]


app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', request.headers.origin)
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  response.header('Access-Control-Allow-Credentials', 'true')
  next()
})

app.get('/', (request, response) => {
	response.send('pas de data sur la racine')
})

app.get('/profile', (request, response) => {
	response.json(profiles)
})

app.get('/profile/:id', (request, response) => {
	const id = Number(request.params.id)
	const specificProfile = profiles.find(elem => elem.id === id)	
	response.json(specificProfile)

})

app.listen(1234, () => console.log(`j'écoute`))