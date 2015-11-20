angular.module("freedomsworn")
	.controller("HomeCtrl", ['$scope', '$meteor', 'Bakery',
		function($scope, $meteor, Bakery){
			
			$scope.Bakery = Bakery;
			
		}]);