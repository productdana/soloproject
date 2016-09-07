const express = require('express');
const app = express();
const http = require('http');
const path = require('path');


const server = http.createServer(app);
const mongoose = require('mongoose');
var dburl = 'mongodb://dana:cs@ds019976.mlab.com:19976/solveit';
mongoose.connect(dburl);
// app.set('view engine', 'html');
// app.use(express.static(__dirname, './../client/'));

// app.use(express.static(path.join(__dirname, './client/')));

// const eventCtrl = require('./controllers/event-controller');

// app.get('/events', eventCtrl.index);
// app.get('/event/:id', eventCtrl.show);

app.use(express.static(path.join(__dirname, './../')));
app.use(express.static(path.join(__dirname, './../client/')));

// /*root route*/
// app.get('/', function(req, res) {

//   res.render('./../client/index');

// });

server.listen(3000, () => {
  console.log('listening at http://localhost:3000');
});

module.exports = server, app;
