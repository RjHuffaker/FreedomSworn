angular.module('freedomsworn')
	.directive('npcDeckOptions', function(){
		return {
			restrict: 'A',
			templateUrl: paths.npcDeck.views+'npc-deck-options.ng.html'
		};
	})
	.directive('npcSummary', function(){
		return {
			restrict: 'A',
			templateUrl: paths.npcDeck.views+'npc-summary.ng.html'
		};
	})
	.directive('npcOptions', function(){
		return {
			restrict: 'A',
			templateUrl: paths.npcDeck.views+'npc-options.ng.html'
		};
	})
	.directive('npcOrigin', function(){
		return {
			restrict: 'A',
			templateUrl: paths.npcDeck.views+'npc-origin.ng.html'
		};
	});