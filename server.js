var express = require('express'),
  app = express(),
  port = process.env.PORT || 9876,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'),
  bodyParser = require('body-parser');
var routes = require('./api/routes/todoListRoutes');


mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Tododb');
  routes(app);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
