var module = angular.module('deltahacks.controllers', []);

module.controller('LoginCtrl', ['$scope', 'UserService', '$state', 
  function ($scope, UserService, $state) {
  console.log('LoginCtrl loaded');
  $scope.fields = {};
  $scope.login = function () {
    UserService.login($scope.fields.email, $scope.fields.password,
      function (err) {
        if (err) return console.log(err);
        $state.go('dashboard');
      })
  };
}])

module.controller('SignupCtrl', ['$scope', 'UserService', '$state', 
  function ($scope, UserService, $state) {
  console.log('SignupCtrl loaded');
  $scope.fields = {};
  $scope.error = '';
  $scope.signup = function () {
    if ($scope.password != $scope.confirmPassword) {
      $scope.error = 'Passwords Do Not Match';
      return;
    }

    UserService.signup($scope.fields,
      function (err) {
        if (err) return console.log(err);
        $state.go('dashboard');
      })
  };
}])

module.controller('DashboardCtrl', 
  ['$scope', 'UserService', '$state', 'ApplicationService',
  function ($scope, UserService, $state, ApplicationService) {
  console.log('DashboardCtrl loaded');

  $scope.getStatus = function () {
    ApplicationService.getStatus()
    .success(function (data) {
      console.log(data);
    })
    .error(function (err) {
      console.log(err)
    });
  }

  $scope.updateStatus = function () {
    ApplicationService.updateStatus($scope.statusUpdate,
      function (err) {
        if (err) return console.log(err);
      })
  }

  $scope.logout = function () {
    UserService.logout()
    .success(function() {
      $state.go('landingpage');
    })
    .error(function(err) {

    });
  }
}])