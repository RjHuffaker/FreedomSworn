angular.module('freedomsworn')
	.directive('modalBox', ['CoreVars', function(CoreVars){
		return {
			restrict: 'A',
			templateUrl: viewPaths.main+'modalBox.ng.html',
			scope: '=',
			link: function(scope, element, attrs){
				
				scope.CoreVars = CoreVars;
				
			}
		};
	}]);