angular.module("freedomsworn")
	.controller("HomeCtrl", ['$scope', '$meteor', '$stateParams', '$location', 'Bakery', 'OtherBakery',
		function($scope, $meteor, $stateParams, $location, Bakery, OtherBakery){
			
			$scope.Bakery = Bakery;
			
			$scope.deckType = $stateParams.deckType;
			
		}]);