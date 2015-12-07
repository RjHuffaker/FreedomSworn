'use strict';

// Directive for managing dice box
angular.module('freedomsworn')
	.directive('diceBox', ['$window', 'CoreVars', 'abilityDice', function($window, CoreVars, abilityDice) {
		return {
			restrict: 'A',
			templateUrl: viewPaths.pcDeck+'dice-box.ng.html',
			link: function(scope, element, attrs){
				
				scope.CoreVars = CoreVars;
				
				scope.abilityDice = abilityDice;
				
				var initialize = function(){
					// prevent native drag
					element.attr('draggable', 'false');
					toggleListeners(true);
				};
				
				var toggleListeners = function(enable){
					if (!enable)return;
					
					scope.$on('$destroy', onDestroy);
					scope.$on('ability:onPress', setPosition);
					scope.$on('ability:setPosition', setPosition);
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
				
				var setPosition = function(event, object){
					var _caret = object.caret;
					var _topEdge = object.topEdge;
					var _leftEdge = object.leftEdge;
					element.removeClass('top-caret');
					element.removeClass('bottom-caret');
					element.addClass(_caret);
					element.css({
						'top': _topEdge+'px',
						'left': _leftEdge+'px'
					});
				};
				
				initialize();
				
			}
		};
	}]);