// const Problem = require('./../../models/problems-model');
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
// mongoose.connect('mongodb://dana:cs@ds019976.mlab.com:19976/solveit');
// mongoose.connection.once('open', () => {
//   console.log('Connected with MongoDB ');
// });

// MongoClient.connect('mongodb://dana:cs@ds019976.mlab.com:19976/solveit', (err, db) => {
//   console.log('Connected with MongoDB');

// // db.collection('problems').insert(probtosave, (err) => console.log(err));

//   });

angular
  .module('Codesmith.ProblemFactory', ['ngRoute'])
  .factory('ProblemFactory', ProblemFactory);

function ProblemFactory($http) {
  var factory = {};
  factory.category = "Programming";
  factory.problem = "Fixing this site";
  factory.num = 1;

  factory.fetch = function() {
    return $http.get('/list');
  };

  // //do I need to post or can I just save?
  factory.poster = function(probObj) {
    console.log('entered problem factory poster, probobj: ', probObj);
    return $http.post('/list', probObj);
  };


  

 factory.save = function(category, problem, num) {
   factory.category = category;
   factory.problem = problem;
   factory.num = num;
   // var probtosave = new Problem({
   //  category: "testcategory",
   //  problem: "testproblem"
   // });
   // probtosave.save((err) => {
   //    if (err) {
   //      console.log(err);
   //    } else {
   //      console.log("problem saved");
   //    };
  // });
  }
  return factory;
  
};

// const MongoClient = require('mongodb').MongoClient;

