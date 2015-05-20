var app = angular.module('gitHubApp');

app.service('gitHubService', function($http, $q){
	console.log('In Her Majesty\'s GitHub Service');

	var id = "myCLientID";
  	var sec = "mySecretKeyThing";
	var param = "?client_id=" + id + "&client_secret=" + sec;

	this.getUser = function(username){
		return $http({
			method: 'GET',
			url: 'https://api.github.com/users/' + username
		})
	};

})