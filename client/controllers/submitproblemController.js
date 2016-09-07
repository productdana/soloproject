// const mongoose = require('mongoose');
// // const Schema = mongoose.Schema;
// mongoose.connect('mongodb://dana:cs@ds019976.mlab.com:19976/solveit');
// mongoose.connection.once('open', () => {
//   console.log('Connected with MongoDB ');
// });

angular
  .module('Codesmith.SubmitProblemController', ['ngRoute', 'Codesmith.ProblemFactory'])
  .controller('SubmitProblemController', ['$scope', 'ProblemFactory', SubmitProblemController]);

function SubmitProblemController($scope, ProblemFactory) {
	$scope.category = ProblemFactory.category;
	$scope.problem = ProblemFactory.problem;
	var fetcher = function() {ProblemFactory.fetch().then(function(result) {
	    $scope.problems = result.data;
	    console.log("SCOPE.problems in fetcher", $scope.problems);
	    return $scope.problems;
	    });
	};
	$scope.poster = function() {
		console.log('entered SubmitProblemController poster');
		var probObj = {};
		probObj.category = $scope.category;
		probObj.problem = $scope.problem;
		ProblemFactory.poster(probObj).then(function(result){
		
			fetcher();
		});
	};
	fetcher();
};


