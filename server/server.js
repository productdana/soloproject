const express = require('express');
const app = express();
const http = require('http');
const path = require('path');

//if you can't see the body, remember to install body-parser and instantiate it with app.use
const bodyParser = require('body-parser');
app.use(bodyParser());

const server = http.createServer(app);
const mongoose = require('mongoose');
var dburl = 'mongodb://dana:cs@ds019976.mlab.com:19976/solveit';
mongoose.connect(dburl);
const Schema = mongoose.Schema;

app.use(express.static(path.join(__dirname, './../')));
app.use(express.static(path.join(__dirname, './../client/')));

const problemSchema = new Schema({
    category: String,
    problem: String,
    num: {type: Number, default: 1}
  });
const Problem = mongoose.model('Problem', problemSchema);

//need to post to database (or post to server -> db)
app.get('/list', function (req, res) {
	console.log('get RESBODY: ', res.data);
	Problem.find(function(err, data){
		if (err) {
          console.log(err);
      	};
	      console.log("inside find", res.json(data));
	});
  // res.send('Got a POST request');
});

app.post('/list', function (req, res) {
	console.log('POST REqBODY: ', req.body);
	var addpost = new Problem({
		category: req.body.category,
		problem: req.body.problem,
		num: req.body.num
	});
	addpost.save( (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log("probObj saved!");
        }

    });
	// db.problems.insert(req.body);
  res.send('Got a POST request');
});

app.get('/api/problems/:problem_id/upvote', function(req, res){
	Problem.findOneAndUpdate({_id: req.params.problem_id}, { $inc: {num: 1} } ), function(err,doc){
    console.log('upvoted');
    };
});

server.listen(3000, () => {
  console.log('listening at http://localhost:3000');
});

module.exports = server, app;
