// const Problem = require('./../../models/problems-model');

angular
  .module('Codesmith.ProblemFactory', ['ngRoute'])
  .factory('ProblemFactory', ProblemFactory);

function ProblemFactory() {
 var factory = {};
 factory.category = "Default category";
 factory.problem = "Default problem description";

const problemSchema = new Schema({
  category: String,
  problem: String
});
const Problem = mongoose.model('Problem', problemSchema);

 factory.save = function(category, problem) {
   factory.category = category;
   factory.problem = problem;
   var probtosave = new Problem({
    category: factory.category,
    problem: factory.problem
   });
   probtosave.save((err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("problem saved");
      };
  });

  return factory;
  };
};