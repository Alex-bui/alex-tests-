const express = require('express')
const app = express()
const profile1 = require('./json/1.json')
const profile2 = require('./json/2.json')

const profiles = [profile1, profile2]

app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', request.headers.origin)
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  response.header('Access-Control-Allow-Credentials', 'true')
  next()
})

app.get('/', (request, response) => {
	response.send(`Is anybody out there?`)
})

app.get('/profiles', (request, response) => {
	response.json(profiles)
})

app.get('/profiles/:id', (request, response) => {
	const id = Number(request.params.id)

	const people = profiles.find(people => people.id === id )

	console.log('yolo', id, people)
	response.json(people)
})

app.listen(1234, () => console.log(`c'est bon j'écoute bien sur le port 1234 d'Orcky`)) 