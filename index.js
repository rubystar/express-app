const express = require('express')
const bodyParser = require('body-parser');
const paricipants = require('./participants/participants')
const mydb = require('./db/mysql');
const dbSetup = require('./dao/dbsetup');

const app = express()
const port = 3000
const con = mydb.getDbConn();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/participants', paricipants)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/ping', (req, res) => {
  res.send('pong!')
})

app.get('/health', (req, res) => {
  res.send(new Date());
})

app.get('/createtables', async (req, res) => {
  const result = await dbSetup.createParticipantsTable();

  res.send(result);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})