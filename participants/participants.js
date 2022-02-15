
const express = require('express')
const router = express.Router()

const mydb = require('../db/mysql');
var con = mydb.getDbConn();

const participantRepo = require('../dao/participants_repo');

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

// define the home page route
router.get('/', async (req, res) => {
  const participants = await participantRepo.getAllParticipants();

  res.send(participants);
})

router.post('/', async (req, res) => {
  const body = req.body;
  try {
    const result = await participantRepo.createParticipant(body.name);
    res.sendStatus(201);
  } catch (error) {
    res.status(400);
    res.send(error.code);
  }
})

router.get('/:id', async (req, res) => {
  const result = await participantRepo.getParticipantById(req.params.id);

  if(result.length == 0) {
    res.sendStatus(404);
    return;
  }
  res.send(result[0]);
})

module.exports = router