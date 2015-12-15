angular.module('freedomsworn')
	.directive('featureCard', ['dataSrvc', function(dataSrvc){
		return {
			restrict: 'A',
			templateUrl: paths.featureDeck.views+'feature-card.ng.html',
			scope: { card: '=', panel: '=' },
			link: function(scope, element, attrs){
				scope.dataSrvc = dataSrvc;
			}
		};
	}]);