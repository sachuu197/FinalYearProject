var express = require('express')
var router = express.Router()
const Data = require('../model/Data')

// Get All Tasks
router.get('/datas', (req, res, next) => {
  Data.findAll()
    .then(datas => {
      res.json(datas)
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

router.post('/data', (req, res, next) => {
    const userData={
        CollegeName :req.body.CollegeName,
        Branch :req.body.Branch,
        ProjectId :req.body.ProjectId,
        ProjectTitle :req.body.ProjectTitle,
        Type :req.body.Type,
        Status :req.body.Status,
        Stage :req.body.Stage,
        Faculty :req.body.Faculty
     }

  if (!userData) {
    res.status(400)
    res.json({
      error: 'Bad Data'
    })
  } else {
    Data.create(userData)
      .then(() => {
        res.send('Task Added!')
      })
      .catch(err => {
        res.send('error: ' + err)
      })
  }
})
/*
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
})*/

module.exports = router
