const express = require('express')  
const app = express()
const path = require('path')  
const exphbs = require('express-handlebars')

// Mondodb:
var MongoClient = require('mongodb').MongoClient
var assert = require('assert')
var url = 'mongodb://localhost:27018/test'

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  db.close();
})

// Handlebars:
app.engine('.hbs', exphbs({  
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}))

app.set('view engine', '.hbs')  

// Default home route for localhost:4021
app.get('/', (request, response) => {  
  // Params: 'home' is name of view, name: 'nameHere' is content to render.
  response.render('home', {
    name: 'Christopher Adams'
  })
})

app.use((err, request, response, next) => {  
  // log the error, for now just console.log
  console.log(err)
  response.status(500).send('Something broke!')
})

// Listen at this port:
app.listen(4021)