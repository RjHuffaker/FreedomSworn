angular.module('freedomsworn')
	.directive('cardDescription', function(){
		return {
			restrict: 'A',
			templateUrl: paths.featureDeck.generalPartial.views+'card-description.ng.html'
		};
	})
	.directive('cardBenefit', function(){
		return {
			restrict: 'A',
			templateUrl: paths.featureDeck.generalPartial.views+'card-benefit.ng.html'
		};
	})
	.directive('cardModifiers', function(){
		return {
			restrict: 'A',
			templateUrl: paths.featureDeck.generalPartial.views+'card-modifiers.ng.html'
		};
	});