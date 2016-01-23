angular.module("freedomsworn")
	.controller("HomeCtrl", ['$scope', '$meteor', '$stateParams', '$location',
		function($scope, $meteor, $stateParams, $location){
			
			$scope.deckType = $stateParams.deckType;
			
		}]);