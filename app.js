const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
})

// const MongoClient = require('mongodb').MongoClient, assert = require('assert');;
// var url = 'mongodb://localhost:27017/grabonrent_production';
// MongoClient.connect(url, (err, db) => {
//   // assert.equal(null, err);
//   if (err) return console.log(err)
//   console.log("Connected correctly to server");
//   app.get('/', function (req, res) {
//     res.sendFile(__dirname + '/index.html');
//   })
// })
