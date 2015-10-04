'use strict';

// feature-card directive
angular.module('freedomsworn')
	.directive('sceneDetails', ['$rootScope', function($rootScope){
		return {
			restrict: 'A',
			templateUrl: 'client/scenes/views/sceneDetails.ng.html'
		};
	}])
	.directive('sceneList', ['$rootScope', function($rootScope){
		return {
			restrict: 'A',
			templateUrl: 'client/scenes/views/sceneList.ng.html'
		};
	}]);