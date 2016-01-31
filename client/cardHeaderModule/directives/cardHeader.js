angular.module('freedomsworn')
	.directive('cardHeader', function(){
		return {
			restrict: 'A',
			templateUrl: paths.cardHeaderModule.views+'card-header.ng.html'
		};
	})
	.directive('cardHeaderLogo', ['$rootScope', function($rootScope){
		return {
			restrict: 'A',
			templateUrl: paths.cardHeaderModule.views+'card-header-logo.ng.html'
		};
	}])
	.directive('cardHeaderAspect', ['$rootScope', function($rootScope){
		return {
			restrict: 'A',
			templateUrl: paths.cardHeaderModule.views+'card-header-aspect.ng.html'
		};
	}])
	.directive('cardHeaderItemType', ['$rootScope', function($rootScope){
		return {
			restrict: 'A',
			templateUrl: paths.cardHeaderModule.views+'card-header-item-type.ng.html'
		};
	}])
	.directive('cardHeaderAspectType', ['$rootScope', function($rootScope){
		return {
			restrict: 'A',
			templateUrl: paths.cardHeaderModule.views+'card-header-aspect-type.ng.html'
		};
	}]);