angular.module('myApp', [
	'ngRoute',
	'myApp.home',
	'myApp.register',
	'myApp.welcome',
	'myApp.addPost'
])

.config(['$routeProvider', function($routeProvider) {
	//Routes over here
	$routeProvider.otherwise({
		redirectTo: '/home'
	});
}]);