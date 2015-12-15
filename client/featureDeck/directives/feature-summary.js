angular.module('freedomsworn')
	.directive('featureSummary', ['featureBread', function(featureBread){
		return {
			restrict: 'A',
			templateUrl: paths.featureDeck.views+'feature-summary.ng.html',
			link: function(scope, element, attrs){
				
				scope.deleteDeck = function(deck){
					featureBread.delete(deck);
				};
			}
		};
	}]);