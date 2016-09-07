const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect('mongodb://dana:cs@ds019976.mlab.com:19976/solveit');
mongoose.connection.once('open', () => {
  console.log('Connected with MongoDB');
});

// // place Schemas here
// var eventSchema = new Schema({
//   id: String,
//   summary: String,
//   htmlLink: String,
//   sequence: Number,
//   created: Date,
//   updated: Date,
//   start: Date,
//   end: Date
// });


// var Event = mongoose.model('Event', eventSchema, 'events');


module.exports = function(data) {

  // //place code here
  // for (var key in data) {
  //   data[key].forEach(function(event){
  //     var eventToSave = new Event({
  //       id: event.id,
  //       summary: event.summary,
  //       htmlLink: event.htmlLink,
  //       sequence: event.sequence,
  //       created: event.created,
  //       updated: event.updated,
  //       start: event.start.dateTime,
  //       end: event.end.dateTime
  //     });

  //     //console.log("eventToSave", eventToSave)

  //     eventToSave.save( (err) => {
  //       if (err) {
  //         console.log(err);
  //       } else {
  //         console.log("event saved");
  //       }

  //     })

  //   });
  // }
};
