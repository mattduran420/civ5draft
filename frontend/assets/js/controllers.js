'use strict';

/* Controllers */

/* Sample Controller */
/*
.controller('sample',['$scope','$http','$cookieStore', function($scope,$http,$cookieStore){
	console.log("sample")
}])
*/

angular.module('angularProject.controllers', [])

.controller('home',['$scope','$http', function($scope,$http){
	console.log("sample")
}])

.controller('draft',['$scope','$http', function($scope){
	$scope.globalBans = []
	$scope.playerBans = []
	$scope.players = []
	$scope.bannableCivs = []
}])