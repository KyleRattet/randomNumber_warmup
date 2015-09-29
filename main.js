var app = angular.module('myApp', []);

app.controller("MainController", function($scope){

  // $scope.restartButton = true;

  $scope.random = Math.floor(Math.random()*(100-0) + 0 +1);

function compare (user, random) {

  if (user > random) {
    $scope.message = "Your number is too high.";
  } else if (user < random) {
    $scope.message = "Your number is too low.";
  } else {
    console.log("test equal");
    $scope.restartButton = true;
    $scope.message = "Your number is correct!";
  }
}
  $scope.message = "";

  $scope.randomNumber = function () {
    compare($scope.playerNumber, $scope.random);
  };

  $scope.startOver = function () {
    $scope.random = Math.floor(Math.random()*(100-0) + 0 +1);
    $scope.playerNumber = "";
    $scope.message = "";
  };

  $scope.giveUp = function () {
    $scope.randomNumber = false;
    $scope.startOver();
    $scope.message = "You are a quitter.";
  };

});




