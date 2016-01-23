angular.module('freedomsworn')
	.directive('stopEvent', ['CoreVars', function(CoreVars){
		return{
			restrict: 'A',
			link: function(scope, element, attrs){
				var _pressEvents = 'touchstart mousedown';
				element.on(_pressEvents, function(event){
					if(!scope.panel.left.overlap && !scope.panel.below.overlap){
						event.stopPropagation();
					}
					/*
					if(element.hasClass('dropdown')){
						console.log('yes');
						if(element.hasClass('open')){
							console.log('and open');
							CoreVars.dropdownOpen = false;
						} else {
							console.log('and closed');
							CoreVars.dropdownOpen = true;
						}
					}
					*/
				});
				
				scope.$watch(function(){ return element.hasClass('open'); }, function(newVal, oldVal){
					console.log('toggle', newVal);
					CoreVars.dropdownOpen = newVal;
				});
				
			}
		};
	}]);