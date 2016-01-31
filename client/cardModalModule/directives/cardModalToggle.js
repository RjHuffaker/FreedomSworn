'use strict';

// Directive for managing ability dice
angular.module('freedomsworn')
	.directive('cardModalToggle', ['$parse', '$rootScope', '$window', 'CoreVars',
		function($parse, $rootScope, $window, CoreVars){
			return {
				restrict: 'A',
				link: function(scope, element, attrs) {
					
					var _pressEvents = 'touchstart mousedown';
					
					var initialize = function(){
						// prevent native drag
						element.attr('draggable', 'false');
						toggleListeners(true);
					};
					
					var toggleListeners = function(enable){
						if (!enable)return;
						
						scope.$on('$destroy', onDestroy);
						element.on(_pressEvents, onPress);
					};
					
					var onDestroy = function(enable){
						toggleListeners(false);
					};
					
					var getElementFontSize = function() {
						return parseFloat(
							$window.getComputedStyle(element[0], null).getPropertyValue('font-size')
						);
					};
					
					var convertEm = function(value) {
						return value * getElementFontSize();
					};
					
					var getModal = function(){
						
						var toggle_x_coord = element.offset().left;
						var toggle_y_coord = element.offset().top;
						var toggle_y_dim = element[0].offsetHeight;
						var toggle_x_dim = element[0].offsetWidth;
						
						var modal_id = attrs.modalId;
						var modal_card = scope.card;
						
						var modal_x_align = attrs.modalxalign;
						var modal_y_align = attrs.modalyalign || toggle_y_coord*2 < $window.innerHeight ? 'bottom' : 'top';
						var modal_x_dim = convertEm(attrs.modalxdim);
						var modal_y_dim = convertEm(attrs.modalydim);
						
						return {
							toggle_x_coord: toggle_x_coord,
							toggle_y_coord: toggle_y_coord,
							toggle_x_dim: toggle_x_dim,
							toggle_y_dim: toggle_y_dim,
							modal_id: modal_id,
							modal_card: modal_card,
							modal_x_align: modal_x_align,
							modal_y_align: modal_y_align,
							modal_x_dim: modal_x_dim,
							modal_y_dim: modal_y_dim
						};
					};
					
					var onPress = function(event){
						$rootScope.$broadcast('cardModalToggle:onPress', getModal());
						
						
						CoreVars.currentModal = getModal();
						//console.log(CoreVars.currentModal);
						event.stopPropagation();
					};
					
					initialize();
				}
			};
		}]);