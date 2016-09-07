angular
  .module('Codesmith.HomeController', ['ngRoute'])
  .controller('HomeController', ['$scope', HomeController]);

//by injecting variables in the annotation in line 3, we can rename the variables UserFactory & MessageFactory in line 6
function HomeController($scope) {
//   $scope.unit = "Unit 10 Prototype";
//   $scope.name = UserFactory.name;
//   $scope.age = UserFactory.age;
//   //$scope.messages;  //we can either declare $scope.messages here without returning it in MessageFactory below or just return $scope.messages in MessageFactory
//   var fetcher = function() {MessageFactory.fetch().then(function(result) {
//     $scope.messages = result.data;
//     console.log("SCOPE.messages in fetcher", $scope.messages);
//     return $scope.messages;
//     });
//   };
// //needs an autoupdate feature
//   $scope.poster = function() {
//     let msgObj = {};
//     msgObj.created_by = $scope.name;
//     msgObj.message = $scope.newMsg;
//     MessageFactory.poster(msgObj).then(function(result){
//     // console.log("RESULT", result);
//     // console.log("SCOPE.messages in poster", $scope.messages);
//     //is msgObj implicity set into the $scope.messages??
//     //$scope.messages = result.data;
//     fetcher();
//     });
//   };

//   $scope.search = function(msgObj) {
//     console.log("msgOBJ", msgObj.created_by);
//     return (angular.lowercase(msgObj.created_by).indexOf(angular.lowercase($scope.query) || '') !== -1 ||
//             angular.lowercase(msgObj.message).indexOf(angular.lowercase($scope.query) || '') !== -1);
//   };

//   fetcher();

}
