'use strict';

angular.module('myApp.home', ['ngRoute','firebase'])
// Declared route
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
    });
}])

// Home controller
.controller('HomeCtrl', ['$scope','$location','CommonProp','$firebaseAuth',function($scope,$location,CommonProp,$firebaseAuth) {
	var firebaseObj = new Firebase("https://vpp-views.firebaseio.com");
 	var loginObj = $firebaseAuth(firebaseObj);
  var login = {};

  $scope.login = login;

 	$scope.SignIn = function(event) {
    event.preventDefault();  // To prevent form refresh
    login.loading = true;
    var username = $scope.user.email;
    var password = $scope.user.password;

    loginObj.$authWithPassword({
            email: username,
            password: password
        })
        .then(function(user) {
            // Success callback
            CommonProp.setUser(user.password.email);
            login.loading = true;
			$location.path('/welcome');
        }, function(error) {
            // Failure callback
            console.log('Authentication failure');
            login.loading = false;
        });
	}
}])
.service('CommonProp', function() {
    var user = '';
    return {
        getUser: function() {
            return user;
        },
        setUser: function(value) {
            user = value;
        }
    };
})
.directive('laddaLoading', [
    function() {
        return {
            link: function(scope, element, attrs) {
                var Ladda = window.Ladda;
                var ladda = Ladda.create(element[0]);
                // Watching login.loading for change
                scope.$watch(attrs.laddaLoading, function(newVal, oldVal) {
                    // Based on the value start and stop the indicator
                    if (newVal) {
                        ladda.start();
                    } else {
                        ladda.stop();
                    }
                });
            }
        };
    }
]);
