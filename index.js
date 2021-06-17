require('dotenv').config()

//Express 
const express = require('express')
const app = express()
//const cors = require('cors')

//Middleware
app.use(express.static('build'))
app.use(express.json())
//app.use(cors())

//Importing Mongodb notes
const Phone = require('./models/phone')

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  }

  next(error)
}

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

app.use(requestLogger)

  app.get('/api/persons', (request, response) => {
    Phone.find({}).then(phones => 
      {
        response.json(phones)
      })
  })



  app.get('/api/persons/:id', (request, response, next) => {
    Phone.findById(request.params.id)
    .then(phone => {
      if (phone) {
        response.json(phone)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
  })

  app.post('/api/persons', (request, response) => {
    const body = request.body


  
    if (body.name == undefined) {
      return response.status(400).json({ 
        error: 'name missing' 
      })
    }

    if (body.phone == undefined) {
      return response.status(400).json({ 
        error: 'phone missing' 
      })
    }
  
    const phone = new Phone({
      name: body.name,
      phone: body.phone,
    })
  
    phone.save().then(savedPhone => {
      response.json(savedPhone)
    })
  })

  app.delete('/api/persons/:id', (request, response) => {
    Phone.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
  })

  
  app.put('/api/persons/:id', (request, response, next) => {
    const body = request.body

    if (body.name == undefined) {
      return response.status(400).json({ 
        error: 'name missing' 
      })
    }

    if (body.phone == undefined) {
      return response.status(400).json({ 
        error: 'phone missing' 
      })
    }
  
    const phone = {
      name: body.name,
      phone: body.phone,
    }
  
    Phone.findByIdAndUpdate(request.params.id, phone, { new: true })
      .then(updatedPhone => {
        response.json(updatedPhone)
      })
      .catch(error => next(error))
  })

  const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }
  
  app.use(unknownEndpoint)
  
  app.use(errorHandler)
  
  const PORT = process.env.PORT
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })