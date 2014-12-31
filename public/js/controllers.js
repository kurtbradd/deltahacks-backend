var module = angular.module('deltahacks.controllers', []);

module.controller('LoginCtrl', ['$scope', function ($scope) {
  console.log('LoginCtrl loaded');
}])

module.controller('DashboardCtrl', ['$scope', function ($scope) {
  console.log('DashboardCtrl loaded');
}])

module.controller('SignupCtrl', ['$scope', function ($scope) {
  console.log('SignupCtrl loaded');

  $scope.fields = {
    email:'',
    password:'',
    confirmPassword:'',
    firstName:'',
    lastName:'',
    school:''
  };

  $scope.signup = function () {
    console.log('signup function called');
    console.log($scope.fields);
  };
}])