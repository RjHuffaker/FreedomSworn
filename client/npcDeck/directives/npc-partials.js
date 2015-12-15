angular.module('freedomsworn')
	.directive('originStats', function(){
		return {
			restrict: 'A',
			templateUrl: 'client/card/views/origin-stats.ng.html'
		};
	})
	.directive('originDefenses', function(){
		return {
			restrict: 'A',
			templateUrl: 'client/card/views/origin-defenses.ng.html'
		};
	});