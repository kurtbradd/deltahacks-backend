var module = angular.module('deltahacks.controllers', []);

module.controller('LoginCtrl', ['$scope', function ($scope) {
  console.log('LoginCtrl loaded');
  $scope.fields = {};
  $scope.login = function () {
    console.log('signup function called');
    console.log($scope.fields);
    // $state.go('dashboard')
  };
}])

module.controller('DashboardCtrl', ['$scope', function ($scope) {
  console.log('DashboardCtrl loaded');
  $scope.logout = function () {
    // delete tokens
    // $state.go('landingpage')
  }
}])

module.controller('SignupCtrl', ['$scope', function ($scope) {
  console.log('SignupCtrl loaded');
  $scope.fields = {};
  $scope.signup = function () {
    console.log('signup function called');
    console.log($scope.fields);
    // $state.go('dashboard')
  };
}])