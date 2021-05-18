
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
  
  const PORT = 3001
  app.listen(PORT)
  console.log(`Server running on port ${PORT}`)