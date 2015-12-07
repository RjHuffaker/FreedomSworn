angular.module('freedomsworn')
	.directive('npcDeckOptions', function(){
		return {
			restrict: 'A',
			templateUrl: viewPaths.npcDeck+'npc-deck-options.ng.html'
		};
	})
	.directive('npcSummary', function(){
		return {
			restrict: 'A',
			templateUrl: viewPaths.npcDeck+'npc-summary.ng.html'
		};
	})
	.directive('npcOptions', function(){
		return {
			restrict: 'A',
			templateUrl: viewPaths.npcDeck+'npc-options.ng.html'
		};
	})
	.directive('npcOrigin', function(){
		return {
			restrict: 'A',
			templateUrl: viewPaths.npcDeck+'npc-origin.ng.html'
		};
	});