'use strict';

angular.module('freedomsworn')
	.factory('featureBread', ['$rootScope', '$meteor', '$location', 'CoreVars', 'featureDefault', 'DeckUtils',
		function($rootScope, $meteor, $location, CoreVars, featureDefault, DeckUtils){
			
			// var featureDeckList = $meteor.collection(FeatureDecks, true).subscribe('featureDecks', {});
			
			var service = {
				deck: {},
				aspects: {}
			};
			
			service.browse = function(){
				
				var _deck = { deckType: 'deckList' };
				
				_deck.cardList = $meteor.collection(FeatureDecks, false).subscribe('featureDecks', {});
				_deck.deckSize = _deck.cardList.length;
				
				DeckUtils.setCardList(_deck.cardList);
				
				service.deck = _deck;
				
				console.log(service.deck);
			};
			
			service.browseReturn = function(params){
				var _deck = { deckType: 'deckList' };
				
				_deck.cardList = $meteor.collection(FeatureDecks, true).subscribe('featureDecks', params);
				_deck.deckSize = _deck.cardList.length;
				
				DeckUtils.setCardList(_deck.cardList);
				
				return _deck;
			};
			
			service.read = function(featureDeckId){
				service.deck = $meteor.object(FeatureDecks, featureDeckId, false);
			};
			
			service.edit = function(){
				service.deck.save();
			};
			
			service.add = function(deckName, cardType, deckSize){
				
				var _deckList = $meteor.collection(FeatureDecks, true);
				
				var _deck = {
					_id: new Meteor.Collection.ObjectID().toString(),
					owner: $rootScope.currentUser._id,
					created: Date.now(),
					name: deckName,
					panelType: 'featureSummary',
					deckType: cardType,
					deckSize: deckSize,
					above: {
						adjacent: null,
						overlap: null
					},
					below: {
						adjacent: null,
						overlap: null
					},
					left: {
						adjacent: null,
						overlap: null
					},
					right: {
						adjacent: null,
						overlap: null
					},
					x_coord: 0,
					y_coord: 0,
					x_dim: 15,
					y_dim: 21,
					cardList: []
				};
				
				for(var i = 0; i < deckSize; i++){
					_deck.cardList.push({
						_id: new Meteor.Collection.ObjectID().toString(),
						deckId: _deck._id,
						panelType: 'featureCard',
						x_dim: 15,
						y_dim: 21,
						cardData: {
							name: 'Panel '+i,
							cardType: cardType,
							entries: [{}]
						}
					});
				}
				
				DeckUtils.setCardList(_deck.cardList);
				
				_deckList.push(_deck);
				
				CoreVars.modalBox = '';
				
				$location.path('/featureDecks/'+_deck._id.toString());
				
			};
			
			service.delete = function(featureDeck){
				var _deckList = $meteor.collection(FeatureDecks, true);
				
				_deckList.splice(_deckList.indexOf(featureDeck), 1);
				service.deck.deckSize = _deckList.length;
			};
			
			return service;
			
		}]);