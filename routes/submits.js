var express = require('express')
var router = express.Router()

const Submit = require('../model/Submit')

// Get All Tasks'
router.get('/submits', (req, res, next) => {
  Submit.findAll()
    .then(submits => {
      res.json(submits)
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

router.post('/submit', (req, res, next) => {
    const userData={
        Task:req.body.Task,
        StudentName:req.body.StudentName,
        DueDate:req.body.DueDate,
        TaskDetails:req.body.TaskDetails,
        Challenges:req.body.Challenges,
        StartDate:req.body.StartDate,
       // Status:req.body.Status
    }

  if (!userData) {
    res.status(400)
    res.json({
      error: 'Bad Data'
    })
  } else {
    Submit.create(userData)
      .then(() => {
        res.send('Task Added!')
      })
      .catch(err => {
        res.send('error: ' + err)
      })
  }
})

router.delete('/submit/:SN', (req, res, next) => {
  Submit.destroy({
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
/*
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
*/
module.exports = router
