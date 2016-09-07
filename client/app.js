
//everything in the array is what 'myApp' depends on
var app = angular
  .module('myApp', [
    'ngRoute',
    'Codesmith.HomeController'
    // 'Codesmith.AboutController',
    // 'Codesmith.UserFactory',
    // 'Codesmith.JobService',
    // 'Codesmith.JobController'
  ]);


//see https://docs.angularjs.org/guide/module for more info
app.config(configFunction);
//function params are injectables (inject Providers into config blocks)
function configFunction($routeProvider, $locationProvider) {

  $routeProvider
    .when('/', {
      templateUrl: './partials/home.html',
      controller: 'HomeController'
    });
    // .when('/about', {
    //   templateUrl: './partials/about.html',
    //   controller: 'AboutController'
    // })
    // .when('/jobs', {
    //   templateUrl: './partials/job.html',
    //   controller: 'JobController'
    // })

}