angular.module('freedomsworn')
	.directive('campaignSummary', function(){
		return {
			restrict: 'A',
			templateUrl: viewPaths.deck+'campaign-summary.ng.html'
		};
	})
	.directive('campaignOptions', function(){
		return {
			restrict: 'A',
			templateUrl: viewPaths.deck+'campaign-options.ng.html'
		};
	})