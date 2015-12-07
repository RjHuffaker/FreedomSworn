'use strict';

angular.module('freedomsworn')
	.factory('featureBread', ['$rootScope', '$meteor', '$location', 'CoreVars', 'featureDefault', 'DeckUtils',
		function($rootScope, $meteor, $location, CoreVars, featureDefault, DeckUtils){
			
			var featureDeckList = $meteor.collection(FeatureDecks, true).subscribe('featureDecks');
			
			var service = {
				deck: {}
			};
			
			service.browse = function(){
				service.deck.cardList = featureDeckList;
				service.deck.deckSize = featureDeckList.length;
				DeckUtils.setCardList(service.deck.cardList);
			};
			
			service.read = function(featureDeckId){
				if(featureDeckId === 'new'){
					service.deck = {
						name: 'Feature Deck',
						panelType: 'featureSummary',
						deckType: 'feature',
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
					CoreVars.modalBox = 'newFeatureDeck';
				} else {
					service.deck = $meteor.object(FeatureDecks, featureDeckId, false);
				}
			};
			
			service.edit = function(featureDeck){
				console.log(featureDeck);
				
				FeatureDecks.insert('123', service.deck);
				/*
				if(featureDeck){
					featureDeck.save();
				} else if(service.deck._id === 'new'){
					service.deck.save();
				} else if($rootScope.currentUser){
					service.deck.owner = $rootScope.currentUser._id;
					featureDeckList.push(service.deck);
				}
				*/
			};
			
			service.add = function(featureType, size){
				
				service.deck = {
					name: 'Feature Deck',
					panelType: 'featureSummary',
					deckType: 'feature',
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
				
				service.deck.deckSize = size;
				
				for(var i = 0; i < size; i++){
					service.deck.cardList.push({
						panelType: featureType,
						x_dim: 15,
						y_dim: 21
					});
				}
				
				console.log(service.deck);
				
				CoreVars.modalBox = '';
				
				service.deck.owner = $rootScope.currentUser._id;
				
				DeckUtils.setCardList(service.deck.cardList);
			};
			
			service.delete = function(featureDeck){
				featureDeckList.splice(featureDeckList.indexOf(featureDeck), 1);
				service.deck.deckSize = featureDeckList.length;
			};
			
			service.addTraits = function(cardList, count){
				
			};
			
			return service;
			
		}]);