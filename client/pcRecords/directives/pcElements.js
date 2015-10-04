'use strict';

// feature-card directive
angular.module('freedomsworn')
	.directive('pcDetails', ['$rootScope', function($rootScope){
		return {
			restrict: 'A',
			templateUrl: 'client/pcRecords/views/pcDetails.ng.html'
		};
	}])
	.directive('pcList', ['$rootScope', function($rootScope){
		return {
			restrict: 'A',
			templateUrl: 'client/pcRecords/views/pcList.ng.html'
		};
	}]);