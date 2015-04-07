'use strict';

/* Controllers */

/* Sample Controller */
/*
.controller('sample',['$scope','$http','$cookieStore', function($scope,$http,$cookieStore){
	console.log("sample")
}])
*/

angular.module('angularProject.controllers', [])

.controller('home',['$scope','$http','$location', function($scope,$http,$location){
	console.log("sample")

	$scope.createGame = function(){
		console.log("create game");
		$location.path('settings');
	}

	$scope.joinGame = function(){
		console.log("join game");
		$location.path('draft');
	}
}])


.controller('settings',['$scope','$http','civilizations','$location', function($scope,$http,civilizations,$location){
	$scope.globalBans = []
	$scope.bannableCivs = civilizations;
	$scope.playerCount = 4;
	$scope.banCount = 1;
	$scope.pickCount = 3;

	$scope.globalBan = function(index){
		$scope.globalBans.push($scope.bannableCivs[index]);
		$scope.bannableCivs.splice(index,1);
		
	}

	$scope.globalUnban = function(index){
		var modIndex = getNewIndex($scope.bannableCivs, $scope.globalBans[index]);
		$scope.bannableCivs.splice(modIndex,0,$scope.globalBans[index]);
		$scope.globalBans.splice(index,1);
	}

	$scope.createGame = function(){
		console.log($scope.globalBans);
		console.log($scope.playerCount);
		console.log($scope.banCount);
		console.log($scope.pickCount);
		$location.path('draft');
	}


}])




.controller('draft',['$scope','$http','civilizations', function($scope,$http,civilizations){
	$scope.globalBans = [civilizations[3],civilizations[7],civilizations[9]];
	$scope.playerBans = [];
	$scope.players = [];
	$scope.bannableCivs = civilizations;

	$scope.ban = function(index){
		$scope.playerBans.push($scope.bannableCivs[index]);
		$scope.bannableCivs.splice(index,1);
		
	}

	$scope.unban = function(index){
		var modIndex = getNewIndex($scope.bannableCivs, $scope.playerBans[index]);
		$scope.bannableCivs.splice(modIndex,0,$scope.playerBans[index]);
		$scope.playerBans.splice(index,1);
	}

	

}])

function getNewIndex(civList, civ){
	var neighbor = binaryFetch(civList,civ.index);
	for (var i = 0; i < civList.length; i++){
		if(neighbor.index == civList[i].index){
			if(civ.index > civList[i].index){
				return i + 1;
			}
			else{
				return i;
			}
		}
	}
}
function binaryFetch(input, i){
	var middle = Math.round((input.length / 2));
	if(input.length == 1){
		return input[middle - 1];
	}
	if(i > input[middle].index){
		return binaryFetch(input.slice(middle,input.length), i);
	}
	else if(i < input[middle].index){
		return binaryFetch(input.slice(0,middle), i);
	}
}