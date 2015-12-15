angular.module('freedomsworn')
	.directive('cardAction', ['dataSrvc', function(dataSrvc){
		return {
			restrict: 'A',
			templateUrl: paths.featureDeck.actionPartial.views+'card-action.ng.html',
			scope: {
				cardAction: '=', panel: '='
			},
			link: function(scope, element, attrs){
				scope.dataSrvc = dataSrvc;
			}
		};
	}])
	.directive('cardActionIcon', function(){
		return {
			restrict: 'A',
			templateUrl: paths.featureDeck.actionPartial.views+'card-action-icon.ng.html'
		};
	})
	.directive('cardActionTitle', function(){
		return {
			restrict: 'A',
			templateUrl: paths.featureDeck.actionPartial.views+'card-action-title.ng.html'
		};
	})
	.directive('cardActionKeywords', function(){
		return {
			restrict: 'A',
			templateUrl: paths.featureDeck.actionPartial.views+'card-action-keywords.ng.html'
		};
	})
	.directive('cardActionPrompt', function(){
		return {
			restrict: 'A',
			templateUrl: paths.featureDeck.actionPartial.views+'card-action-prompt.ng.html'
		};
	})
	.directive('cardActionEffect', function(){
		return {
			restrict: 'A',
			templateUrl: paths.featureDeck.actionPartial.views+'card-action-effect.ng.html'
		};
	})
	.directive('cardActionAttack', function(){
		return {
			restrict: 'A',
			templateUrl: paths.featureDeck.actionPartial.views+'card-action-attack.ng.html'
		};
	})
	.directive('cardActionDefense', function(){
		return {
			restrict: 'A',
			templateUrl: paths.featureDeck.actionPartial.views+'card-action-defense.ng.html'
		};
	});