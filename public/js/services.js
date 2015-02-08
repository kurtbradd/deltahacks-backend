var module = angular.module('deltahacks.services', []);

module.factory('ApplicationService', ['$http', 'AuthenticationService', 
  function ($http, AuthenticationService) {
	var apiEndpoint = '/application'
	return {
		updateApplication: function (updatedFields) {
			return $http({
				method:'POST',
				url:apiEndpoint,
				data: updatedFields
			})
		},
		getStatus: function () {
			return $http({
				method:'GET',
				url:apiEndpoint + '/status'
			})
		},
		updateStatus: function (status, cb) {
			$http({
				method:'POST',
				url:apiEndpoint + '/status',
				data: {applicationStatus: status}
			})
      .success(function (data) {
        AuthenticationService.storeNewUser(data.user);
        cb(null);
      })
      .error(function (err) {
        cb(err);
      })
		}
	};
}])

module.factory('UserService', ['$http', 'AuthenticationService', 
  function ($http, AuthenticationService) {
	var apiEndpoint = '/sessions'
	return {
		login: function(email, password, cb) {
			$http({
				method:'POST',
				url:apiEndpoint + '/login',
				data: {email: email, password: password}
			})
      .success(function(data) {
        AuthenticationService.storeNewUser(data.user);
        AuthenticationService.storeToken(data.token);
        cb(null);
      })
      .error(function(err) {
        cb(err);
      })
		},
		logout: function(cb) {
			$http({
				method:'GET',
				url:apiEndpoint + '/logout'
			})
      .success(function (data) {
        AuthenticationService.logout();
        cb(null);
      })
      .error(function (err) {
        cb(err);
      })
		},
		signup: function(formFields, cb) {
			$http({
				method:'POST',
				url:apiEndpoint + '/signup',
				data: formFields
			})
      .success(function(data) {
        AuthenticationService.storeNewUser(data.user);
        AuthenticationService.storeToken(data.token);
        cb(null);
      })
      .error(function (err) {
        cb(err);
      })
		}
	};
}]);

module.factory('AuthenticationService', ['$window', function ($window) {
  var _isAuthenticated = false;
  var _isAdmin = false;
  var _currentUser = {};
  return {
    isAuthenticated: _isAuthenticated,
    isAdmin: _isAdmin,
    authorize: function (accessLevel) {
      return accessLevel == user.accessLevel;
    },
    storeToken: function (token) {
      $window.sessionStorage.token = token;
    },
    storeNewUser: function (user) {
      _isAuthenticated = true;
      _isAdmin = user.isAdmin;
      currentUser = user;
    },
    logout: function () {
      _isAuthenticated = false;
      _isAdmin = false;
      currentUser = {};
      delete $window.sessionStorage.token;
    }
  };
}])

module.factory('TokenInterceptor', function ($q, $window, $location, AuthenticationService) {
	return {
		request: function (config) {
			config.headers = config.headers || {};
			if ($window.sessionStorage.token) {
					config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
			}
			return config;
		},
		requestError: function(rejection) {
			return $q.reject(rejection);
		},
		/* Set Authentication.isAuthenticated to true if 200 received */
		response: function (response) {
			if (response != null && response.status == 200 && $window.sessionStorage.token && !AuthenticationService.isAuthenticated) {
				AuthenticationService.isAuthenticated = true;
			}
			return response || $q.when(response);
		},
		/* Revoke client authentication if 401 is received */
		responseError: function(rejection) {
			if (rejection != null && rejection.status === 401 && ($window.sessionStorage.token || AuthenticationService.isAuthenticated)) {
				delete $window.sessionStorage.token;
				AuthenticationService.isAuthenticated = false;
				// $location.path("/admin/login");
			}
			return $q.reject(rejection);
		}
	};
});
