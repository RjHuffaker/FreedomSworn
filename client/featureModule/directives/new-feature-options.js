angular.module('freedomsworn')
	.directive('newFeatureOptions', ['featureBread', function(featureBread){
		return {
			restrict: 'A',
			templateUrl: paths.featureModule.views+'new-feature-options.ng.html',
			link: function(scope, element, attrs){
				
				scope.newDeck = {
					name: '',
					cardType: '',
					deckSize: 8
				};
				
				scope.setCardType = function(cardType){
					scope.newDeck.cardType = cardType;
				};
				
				scope.addNewDeck = function(newDeck){
					featureBread.add(newDeck.name, newDeck.cardType, newDeck.deckSize);
				};
				
			}
		};
	}]);