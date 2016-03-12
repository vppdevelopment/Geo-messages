'use strict';

angular.module('myApp.welcome', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/welcome', {
        templateUrl: 'welcome/welcome.html',
        controller: 'WelcomeCtrl'
    });
}])

.controller('WelcomeCtrl', ['$scope','$firebase','CommonProp', function($scope,$firebase,CommonProp) {
  var firebaseObj = new Firebase("https://vpp-views.firebaseio.com/Articles");
	var sync = $firebase(firebaseObj);

	$scope.username = CommonProp.getUser();

	$scope.articles = sync.$asArray();

  $scope.editPost = function(id) {
    var firebaseObj = new Firebase("https://vpp-views.firebaseio.com/Articles/" + id);
    var syn = $firebase(firebaseObj);
    $scope.postToUpdate = syn.$asObject();
    $('#editModal').modal();
  }

  $scope.update = function() {
    var fb = new Firebase("https://vpp-views.firebaseio.com/Articles/" + $scope.postToUpdate.$id);
    var article = $firebase(fb);
    article.$update({
      title: $scope.postToUpdate.title,
      post: $scope.postToUpdate.post,
      emailIld: $scope.postToUpdate.emailId
    }).then(function(ref){
      //Update successful
      $('#editModal').modal('hide');
    }, function(error) {
      console.log("Error" + error);
    });
  }

  $scope.confirmDelete = function(id) {
      var fb = new Firebase("https://vpp-views.firebaseio.com/Articles/" + id);
      var article = $firebase(fb);
      $scope.postToDelete = article.$asObject();
      $('#deleteModal').modal();
  }

  $scope.deletePost = function() {
      var fb = new Firebase("https://vpp-views.firebaseio.com/Articles/" + $scope.postToDelete.$id);
      var article = $firebase(fb);
      article.$remove().then(function(ref) {
          $('#deleteModal').modal('hide');
      }, function(error) {
          console.log("Error:", error);
      });
  }
}]);
