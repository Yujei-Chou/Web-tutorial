#!/usr/bin/env node
/* Step 1:
 * edit [port] to an appropriate value
 * storing config to variables is a good practice, see `port` in the code
 * learn the syntax of string interpolation in js, see `${port}` in the code
 * �N [port] �ק令�X�A����
 * �N�]�w��b�ܼƤ��O�@�ئn�ߺD�A�Ѧҵ{������ `port`
 * �ǲ� js �� string interpolation �y�k�A�Ѧҵ{������ `${port}`
 */

// include `express`
// ���J `express`
const express = require('express')
const bcrypt = require('bcrypt')

// create an express, aka web server, instance
// �إߤ@�� express (�]�N�O�������A��)����
const app = express()

const port = 8217

// handle `/step1` url
// �B�z `/step1` ���}
app.get('/step1', (req, res) => {
  // response browser
  // �^���s����
  res.send('<h1>hello world</h1>')
})

// start the server
// �Ұʦ��A��
app.listen(port, () => {
  console.log(`listening on port: ${port}`)
})


// Step 3 codes goes here
app.use(express.static(`${__dirname}/dist`))

// Step 4 codes goes here
let nRequests = 0
app.get('/step4', (req, res) => {
  res.send(`this is request #${++nRequests}`)
})

// Step 5 codes goes here
app.get('/step5', (req, res) => {
  res.send(`Helloooooooo!!, ${req.query.fname} ${req.query.lname}`)
})

// Step 7 codes goes here
// include `body-parser`
// ���J `body-parser`
const bodyParser = require('body-parser')

// setup `body-parser`
// �]�w `body-parser`
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/step7', (req, res) => {
  // `bady-parser` stores parsed data in `req.body`
  // `bady-parser` �N�ѪR�n����Ʀs��b `req.body`
  res.send(`Hello, ${req.body.fname} ${req.body.lname}`)
})




