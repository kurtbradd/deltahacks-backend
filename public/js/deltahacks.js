var dependencies = ['ui.router',
          'deltahacks.controllers', 
          'deltahacks.directives',
          'deltahacks.services']

var app = angular.module('deltahacks', dependencies);

app.run(['$rootScope', '$state', '$stateParams',
  function ($rootScope, $state, $stateParams) {
  // Add references to $state and $stateParams on the $rootScope
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
}])

app.config(['$stateProvider', '$urlRouterProvider','$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('login', {
      url: '/login',
      controller:'LoginCtrl',
      templateUrl:'./views/login.html'
    })
    .state('dashboard', {
      url:'/dashboard',
      controller:'DashboardCtrl',
      templateUrl:'./views/dashboard.html'
    })
    .state('signup', {
      url:'/signup',
      controller:'SignupCtrl',
      templateUrl:'./views/signup.html'
    })
    .state('landingpage', {
      url:'/',
      templateUrl:'./views/landingpage.html'
    })
}])