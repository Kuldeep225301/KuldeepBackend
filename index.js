require('dotenv').config()

const express = require('express')                  // it's common js
// import express  from "express"                              // it's module js
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) =>{
    res.send('kuldeepcom')
})

app.get('/login', (req, res) =>{
    res.send('<h1>Please login at facebook <h1/>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>kuldeep Aryan2349</h2>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})