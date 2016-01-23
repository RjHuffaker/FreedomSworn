angular.module('freedomsworn')
	.directive('cardHeader', function(){
		return {
			restrict: 'A',
			templateUrl: paths.layoutModule.views+'card-header.ng.html'
		};
	})
	.directive('cardFooter', function(){
		return {
			restrict: 'A',
			templateUrl: paths.layoutModule.views+'card-footer.ng.html'
		};
	})
	.directive('cardLogo', ['$rootScope', function($rootScope){
		return {
			restrict: 'A',
			templateUrl: paths.layoutModule.views+'card-logo.ng.html'
		};
	}]);