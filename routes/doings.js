var express = require('express')
const Doing = require('../model/Doing')
var router = express.Router()
//const Doing = require('../model/Doing')

// Get All Tasks
router.get('/doings', (req, res, next) => {
  Doing.findAll()
    .then(doings => {
      res.json(doings)
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

router.post('/doing', (req, res, next) => {
    const userData={
        Task:req.body.Task,
        StartDate:req.body.StartDate,
        DueDate:req.body.DueDate,
        allotedTo:req.body.allotedTo,
       // Status:req.body.Status
    }

  if (!userData) {
    res.status(400)
    res.json({
      error: 'Bad Data'
    })
  } else {
    Doing.create(userData)
      .then(() => {
        res.send('Task Added!')
      })
      .catch(err => {
        res.send('error: ' + err)
      })
  }
})

router.delete('/doing/:SN', (req, res, next) => {
  Doing.destroy({
    where: {
      SN: req.params.SN
    }
  })
    .then(() => {
      res.send('Task deleted!')
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})


// Update Task
/*
router.put('/task/:SN', (req, res, next) => {
  if (!req.body.taskname) {
    res.status(400)
    res.json({
      error: 'Bad Data'
    })
  } else {
    Task.update(
      { taskname: req.body.taskname },
      { where: { id: req.params.iSN} }
    )
      .then(() => {
        res.send('Task Updated!')
      })
      .error(err => handleError(err))
  }
})
*/
module.exports = router
