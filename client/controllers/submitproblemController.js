angular
  .module('Codesmith.SubmitProblemController', ['ngRoute', 'Codesmith.ProblemFactory'])
  .controller('SubmitProblemController', ['$scope', SubmitProblemController]);

function SubmitProblemController($scope, ProblemFactory) {
	$scope.category = ProblemFactory.category;
	$scope.problem = ProblemFactory.problem;
	$scope.save = function(category, problem) {
		ProblemFactory.save(category, problem);
	}
}
