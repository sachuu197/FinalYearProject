var express = require('express')
const Done = require('../model/Done')
var router = express.Router()
//const Doing = require('../model/Doing')

// Get All Tasks
router.get('/dones', (req, res, next) => {
    Done.findAll()
    .then(dones => {
      res.json(dones)
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

router.post('/done', (req, res, next) => {
    const userData={
        Task:req.body.Task,
        StartDate:req.body.StartDate,
        ApprovedDate:req.body.ApprovedDate,
        Status:req.body.Status
    }

  if (!userData) {
    res.status(400)
    res.json({
      error: 'Bad Data'
    })
  } else {
    Done.create(userData)
      .then(() => {
        res.send('Task Added!')
      })
      .catch(err => {
        res.send('error: ' + err)
      })
  }
})

router.delete('/done/:SN', (req, res, next) => {
  Done.destroy({
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
