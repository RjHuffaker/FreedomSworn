angular.module("freedomsworn")
	.controller("FeatureDeckDetailsCtrl", ['$scope', '$meteor', '$stateParams', '$location', 'CoreVars', 'featureBread', 'PanelUtils', 'DeckUtils',
		function($scope, $meteor, $stateParams, $location, CoreVars, featureBread, PanelUtils, DeckUtils){
			
			$scope.CoreVars = CoreVars;
			
			featureBread.read($stateParams.featureDeckId);
			
			$scope.featureBread = featureBread;
			
		}]);