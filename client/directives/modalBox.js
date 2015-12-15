angular.module('freedomsworn')
	.directive('modalBox', ['CoreVars', function(CoreVars){
		return {
			restrict: 'A',
			templateUrl: paths.views+'modalBox.ng.html',
			scope: '=',
			link: function(scope, element, attrs){
				
				scope.CoreVars = CoreVars;
				
			}
		};
	}]);