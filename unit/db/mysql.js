#!/usr/bin/env node

const config = require('./config')
const mysql = require('mysql')

const connection = mysql.createConnection(config.mysql)

connection.connect(err => {
  if (err) {
    console.log('fail to connect:', err)
    process.exit()
  }
})

// Step 2 code goes here
// create tables
connection.query('CREATE TABLE IF NOT EXISTS student_2 (id VARCHAR(10), name VARCHAR(30), cid VARCHAR(30))')
connection.query('CREATE TABLE IF NOT EXISTS course_2 (id VARCHAR(10), name VARCHAR(30))')
connection.query('CREATE TABLE IF NOT EXISTS score_2 (id VARCHAR(10), score VARCHAR(10))')

// list tables
connection.query('SHOW TABLES', function (error, results, fields) {
  if (error) throw error
  console.log('There are tables: ', results)
})

// Step 3 code goes here
/*
connection.query('INSERT INTO student_2 (id, name, cid) VALUES ("F11111111", "StudentA", "W0001"), ("A12345679", "StudentB", "M0001")', (err, result) => {
  if (err) console.log('fail to insert:', err)
})
connection.query('INSERT INTO course_2 (id, name) VALUES ("W0001", "Web Programming"), ("M0001", "Machine Learning"), ("A0001", "Algorithm")', (err, result) => {
  if (err) console.log('fail to insert:', err)
})
connection.query('INSERT INTO score_2 (id, score) VALUES ("F11111111", 80), ("A123456789", 90)', (err, result) => {
  if (err) console.log('fail to insert:', err)
})
*/

// Step 4 code goes here
connection.query('SELECT id FROM student_2 WHERE name LIKE "StudentB"', function (error, results, fields) {
  if (error) throw error
  console.log('My id is: ', results)
})

// Step 5 code goes here
const sql = `
  SELECT course_2.id, course_2.name FROM course_2
  JOIN student_2 ON student_2.cid = course_2.id
  WHERE student_2.name LIKE 'StudentB'`
connection.query(sql, (err, rows, fields) => {
  if (err) console.log('fail to query: ', err)
  else console.log(rows)
})

connection.end()
