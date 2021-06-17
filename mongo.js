const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://fullstack:${password}@cluster0.3lsoh.mongodb.net/phonebook-app?retryWrites=true&w=majority`


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const phoneSchema = new mongoose.Schema({
  name: String,
  phone: String,
  id: Number,
})

const Phone = mongoose.model('Phone', phoneSchema)

const phone = new Phone({
  name: process.argv[3],
  phone: process.argv[4],
  id: Math.random(),
})

if (process.argv.length > 4) {
phone.save().then(result => {
  console.log('added ' + process.argv[3] + ' number ' + process.argv[4] + ' to phonebook ')
  mongoose.connection.close()
})
} else {
  Phone.find({}).then(result => {
    result.forEach(phone => {
      console.log(phone)
    })
    mongoose.connection.close()
  })
}
