const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://dana:cs@ds019976.mlab.com:19976/solveit');

const problemSchema = new Schema({
	id: String,
	category: String,
	problem: String,
	problemDesc: String
});


const Problem = mongoose.model('Problem', problemSchema);

module.exports = Event;
