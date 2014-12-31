var dependencies = ['ui.router',
					'deltahacks.controllers', 
					'deltahacks.directives',
					'deltahacks.services']

var app = angular.module('deltahacks', dependencies);

app.run(['$rootScope', '$state', '$stateParams', '$window','AuthenticationService',
	function ($rootScope, $state, $stateParams, $window, AuthenticationService) {
	// Add references to $state and $stateParams on the $rootScope
	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;

 	$rootScope.$on("$stateChangeStart", 
 		function (event, toState, toParams, fromState, fromParams) {
 			if(toState.data != undefined && toState.data.access != undefined
 				&& !AuthenticationService.isAuthenticated && !$window.sessionStorage.token) {
 				$state.go('login');
 			}		
		});
}])

app.config(['$stateProvider', '$urlRouterProvider','$locationProvider','$httpProvider',
	function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
		$httpProvider.interceptors.push('TokenInterceptor');
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
			templateUrl:'./views/dashboard.html',
			data: {
				access: "user"
			}
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