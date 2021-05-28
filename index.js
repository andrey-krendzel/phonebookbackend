
//Express 
const express = require('express')
const app = express()
app.use(express.json())

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

  const generateId = () => {
    const maxId = notes.length > 0
      ? Math.max(...notes.map(n => n.id))
      : 0
    return maxId + 1
  }
  
  app.post('/api/persons', (request, response) => {
    const body = request.body
  
    if (!body.content) {
      return response.status(400).json({ 
        error: 'content missing' 
      })
    }
  
    const person = {
      content: body.content,
      important: body.important || false,
      date: new Date(),
      id: generateId(),
    }
  
    notes = notes.concat(note)
  
    response.json(note)
  })
  
  const PORT = 3001
  app.listen(PORT)
  console.log(`Server running on port ${PORT}`)