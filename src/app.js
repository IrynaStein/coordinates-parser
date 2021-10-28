// const path = require('path')
const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Iryna Stein - test ')
  })
 
  



  app.listen(3000)