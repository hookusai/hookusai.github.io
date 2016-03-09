'use strict';

var roomControllers = angular.module('roomControllers', []);

//detail controller utilities table
roomControllers.controller('list_DetailutilitiesCtrl', ['$scope', 'RoomServices', 'detail_room_utilitiesProvider' function ($scope) {
	function($scope, RoomServices, detail_room_utilitiesProvider){
		$scope.detailsutilities = RoomServices.getRooms();

		$scope.reset = function(){
			$scope.newRoom = angular.copy({});
			$scope.show = false;
		};

	};
}]);

//detail controller relax table
roomControllers.controller('list_DetailrelaxCtrl', ['$scope', 'RoomServices', 'detail_room_relaxProvider' function ($scope) {
	function($scope, RoomServices, detail_room_relaxProvider){
		$scope.detailsrelax = RoomServices.getRooms();

		$scope.reset = function(){
			$scope.newRoom = angular.copy({});
			$scope.show = false;
		};

	};
}]);