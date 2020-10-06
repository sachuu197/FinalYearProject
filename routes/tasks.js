var express = require('express')
var router = express.Router()

const Task = require('../model/Task')

// Get All Tasks'
router.get('/tasks', (req, res, next) => {
  Task.findAll()
    .then(tasks => {
      res.json(tasks)
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

router.post('/task', (req, res, next) => {
    const userData={
        taskname:req.body.taskname,
        allotedTo:req.body.allotedTo,
        DueDate:req.body.DueDate
    }

  if (!userData) {
    res.status(400)
    res.json({
      error: 'Bad Data'
    })
  } else {
    Task.create(userData)
      .then(() => {
        res.send('Task Added!')
      })
      .catch(err => {
        res.send('error: ' + err)
      })
  }
})

router.delete('/task/:SN', (req, res, next) => {
  Task.destroy({
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

module.exports = router
