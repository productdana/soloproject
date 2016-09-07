
//everything in the array is what 'myApp' depends on
var app = angular
  .module('myApp', [
    'ngRoute',
    'Codesmith.HomeController',
    'Codesmith.SubmitProblemController',
    'Codesmith.ProblemFactory',
    'Codesmith.ShowProblemsController'
  ]);


//see https://docs.angularjs.org/guide/module for more info
app.config(configFunction);
//function params are injectables (inject Providers into config blocks)
function configFunction($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: './partials/home.html',
      controller: 'HomeController'
    })
    .when('/submitproblem', {
      templateUrl: './partials/submitproblem.html',
      controller: 'SubmitProblemController'
    })
    .when('/showproblems', {
      templateUrl: './partials/showproblems.html',
      controller: 'SubmitProblemController'
    });

}