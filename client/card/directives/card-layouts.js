angular.module('freedomsworn')
	.directive('featureCard', ['DataSRVC', 'Bakery', function(DataSRVC, Bakery){
		return {
			restrict: 'A',
			templateUrl: viewPaths.card+'feature-card.ng.html',
			scope: { panel: '=' },
			link: function(scope, element, attrs){
				// scope.Bakery = Bakery;
				// scope.dataSRVC = DataSRVC;
			}
		};
	}])
	.directive('deckDemo', function(){
		return {
			restrict: 'A',
			templateUrl: viewPaths.card+'deck-demo.ng.html'
		};
	});