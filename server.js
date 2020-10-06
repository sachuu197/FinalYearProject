var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')

var tasks = require('./routes/tasks')
var datas = require('./routes/datas')
var doings = require('./routes/doings')
var submits = require('./routes/submits')
var dones = require('./routes/dones')
var cors = require('cors')

var port = 3000

var app = express()
app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api', tasks)
app.use('/api', datas)
app.use('/api', doings)
app.use('/api', submits)
app.use('/api', dones)

app.listen(port, function() {
  console.log('Server started on port ' + port)
})