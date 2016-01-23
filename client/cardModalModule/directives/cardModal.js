'use strict';

angular.module('freedomsworn')
	.directive('cardModal', ['$window', 'CoreVars', 'dataSrvc',
		function($window, CoreVars, dataSrvc){
			return {
				restrict: 'A',
				templateUrl: paths.cardModalModule.views+'card-modal.ng.html',
				link: function(scope, element, attrs){
					
					scope.CoreVars = CoreVars;
					
					scope.dataSrvc = dataSrvc;
					
					var modal = {};
					
					var initialize = function(){
						// prevent native drag
						element.attr('draggable', 'false');
						toggleListeners(true);
					};
					
					var toggleListeners = function(enable){
						if (!enable)return;
						scope.$on('$destroy', onDestroy);
						scope.$on('cardModalToggle:onPress', setDimensions);
						scope.$watch(getModalHeight, function(newVal, oldVal){
							if(modal.modal_y_align){
								scope.modal_y_coord = modal.toggle_y_coord + modal.toggle_y_dim;
							} else {
								scope.modal_y_coord = modal.toggle_y_coord - newVal;
							}
						});
						scope.$watch(getModalWidth, function(newVal, oldVal){
							if(modal.modal_x_align==='left'){
								scope.modal_x_coord = modal.toggle_x_coord;
							} else if(modal.modal_x_align==='right'){
								scope.modal_x_coord = modal.toggle_x_coord + (modal.toggle_x_dim - modal.modal_x_dim);
							} else {
								scope.modal_x_coord = modal.toggle_x_coord;
							}
						});
					};
					
					var onDestroy = function(enable){
						toggleListeners(false);
					};
					
					var getElementFontSize = function(){
						return parseFloat(
							$window.getComputedStyle(element[0], null).getPropertyValue('font-size')
						);
					};
					
					var convertEm = function(value) {
						return value * getElementFontSize();
					};
					
					var getModalHeight = function(){
						return element[0].querySelector('.card-modal').offsetHeight;
					};
					
					var getModalWidth = function(){
						return element[0].querySelector('.card-modal').offsetWidth;
					};
					
					var setDimensions = function(event, object){
						modal = object;
						scope.card = object.modal_card;
						scope.modal_x_dim = object.modal_x_dim;
						scope.modal_y_dim = object.modal_y_dim;
					};
					
					initialize();
					
				}
			};
		}]);