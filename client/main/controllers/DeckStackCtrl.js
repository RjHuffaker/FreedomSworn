angular.module("freedomsworn")
	.controller("DeckStackCtrl", ['$scope', '$meteor', '$stateParams', '$location', 'Bakery', 'OtherBakery',
		function($scope, $meteor, $stateParams, $location, Bakery, OtherBakery){
			
			$scope.Bakery = Bakery;
			
			$scope.deckType = $stateParams.deckType;
			
			$scope.$watch(function() {
				return $location.path();
			}, function(oldVal, newVal){
				if($stateParams.deckType === 'first'){
					$scope.Bakery = Bakery;
				} else if($stateParams.deckType === 'second'){
					$scope.Bakery = OtherBakery;
				}
			});
			
		}]);