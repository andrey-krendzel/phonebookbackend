
//Express 
const express = require('express')
const app = express()
const cors = require('cors')

//Middleware
var morgan = require('morgan')
app.use(express.json())


app.use(cors())

app.use(express.static('build'))

morgan(function (tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
  ].join(' ')
})

let persons = [
    {
      id: 1,
      name: "Arto hellas",
      phone: "04044424242"
    },
    {
      id: 2,
      name: "Ada Lovelace",
      phone: "3943435565"
    },
    {
        id: 3,
        name: "Dan Abramov",
        phone: "0405563424"
      }
  ]

  app.get('/api/persons', (request, response) => {
    response.json(persons)
  })

  app.get('/info', (request, response) => {
    var dates = new Date()
    response.send('Phonebook has info for ' + persons.length + ' persons <br/> ' + dates)
  })

  app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    console.log(id)
    const person = persons.find(person => person.id === id)
    console.log(person)
    response.json(person)
  })

  app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
  
    response.status(204).end()
  })

  
  app.post('/api/persons', (request, response) => {
    const body = request.body
  
    if (!body.name) {
      return response.status(400).json({ 
        error: 'name missing' 
      })
    }

    if (!body.phone) {
      return response.status(400).json({ 
        error: 'phone missing' 
      })
    }

    if (persons.find(person => person.name === body.name)) {
      return response.status(400).json({ 
        error: 'name must be unique' 
      })
    }
  
    const person = {
      name: body.name,
      phone: body.number,
      date: new Date(),
      id: Math.random(),
    }
  
    persons = persons.concat(person)
  
    response.json(person)
  })


  
  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })