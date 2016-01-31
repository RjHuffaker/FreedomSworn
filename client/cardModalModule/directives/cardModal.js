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
					
					var cardModalToggleHandler = null;
					var modalHeightHandler = null;
					var modalWidthHandler = null;
					
					var initialize = function(){
						// prevent native drag
						element.attr('draggable', 'false');
						toggleListeners(true);
					};
					
					var toggleListeners = function(enable){
						if(enable){
							scope.$on('$destroy', onDestroy);
							
							cardModalToggleHandler = scope.$on('cardModalToggle:onPress', setDimensions);
							
							modalHeightHandler = scope.$watch(getModalHeight, function(newVal, oldVal){
								if(!newVal) return;
								switch(modal.modal_y_align){
									case "bottom":
										scope.modal_y_coord = modal.toggle_y_coord + modal.toggle_y_dim;
										break;
									case "top":
										scope.modal_y_coord = modal.toggle_y_coord - newVal;
										break;
									}
							});
							
							modalWidthHandler = scope.$watch(getModalWidth, function(newVal, oldVal){
								if(!newVal) return;
								switch(modal.modal_x_align){
									case "left":
										scope.modal_x_coord = modal.toggle_x_coord;
										break;
									case "right":
										scope.modal_x_coord = modal.toggle_x_coord + (modal.toggle_x_dim - newVal);
										break;
									case "both":
										scope.modal_x_coord = modal.toggle_x_coord;
										scope.modal_x_dim = modal.toggle_x_dim;
										break;
								}
							});
							
						} else {
							cardModalToggleHandler();
							modalHeightHandler();
							modalWidthHandler();
						}
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