var app = angular.module('gitHubApp');

app.controller('gitHubController', function($scope, gitHubService){
	console.log('In the github controller');

	$scope.user = null;

	$scope.getUserData = function(){
		gitHubService.getUser($scope.searchText).then(
			function(response){
				$scope.user = response.data;
				console.log($scope.user);
			}, function(err){
				console.log(err);
			}
		)
	}

});