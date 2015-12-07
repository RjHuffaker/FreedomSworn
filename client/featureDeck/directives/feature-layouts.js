angular.module('freedomsworn')
	.directive('featureDeckOptions', function(){
		return {
			restrict: 'A',
			templateUrl: viewPaths.featureDeck+'feature-deck-options.ng.html'
		};
	})
	.directive('featureSummary', function(){
		return {
			restrict: 'A',
			templateUrl: viewPaths.featureDeck+'feature-summary.ng.html'
		};
	})
	.directive('featureOptions', function(){
		return {
			restrict: 'A',
			templateUrl: viewPaths.featureDeck+'feature-options.ng.html'
		};
	})
	.directive('newFeatureOptions', ['featureBread', function(featureBread){
		return {
			restrict: 'A',
			templateUrl: viewPaths.featureDeck+'new-feature-options.ng.html',
			link: function(scope, element, attrs){
				scope.featureBread = featureBread;
			}
		};
	}]);