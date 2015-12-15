angular.module('freedomsworn')
	.directive('cardHeader', function(){
		return {
			restrict: 'A',
			templateUrl: paths.featureDeck.layoutPartial.views+'card-header.ng.html'
		};
	})
	.directive('cardFooter', function(){
		return {
			restrict: 'A',
			templateUrl: paths.featureDeck.layoutPartial.views+'card-footer.ng.html'
		};
	})
	.directive('cardLogo', ['$rootScope', function($rootScope){
		return {
			restrict: 'A',
			templateUrl: paths.featureDeck.layoutPartial.views+'card-logo.ng.html'
		};
	}]);