angular.module("freedomsworn")
	.controller("FeatureDeckDetailsCtrl", ['$scope', '$meteor', '$stateParams', '$location', 'CoreVars', 'dataSrvc', 'featureBread', 'PanelUtils', 'DeckUtils',
		function($scope, $meteor, $stateParams, $location, CoreVars, dataSrvc, featureBread, PanelUtils, DeckUtils){
			
			$scope.CoreVars = CoreVars;
			
			$scope.dataSrvc = dataSrvc;
			
			featureBread.read($stateParams.featureDeckId);
			
			$scope.featureBread = featureBread;
			
			
			$scope.toggled = function(){
				console.log('toggled');
			};
		}]);