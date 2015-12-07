'use strict';

angular.module('freedomsworn')
	.factory('OtherBakery', [function(){
		var service = {};
		
		service.resource = {
			
			name: 'That Deck',
			dependencies: [],
			deckType: '',
			deckSize: 4,
			cardList: [
				{
					_id: 'DC1',
					panelType: 'deckDemo',
					x_coord: 0,
					y_coord: 0,
					x_dim: 10,
					y_dim: 14,
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
						adjacent: 'DC2',
						overlap: null
					},
					content: 'Aasdfdsa rewqrew sfdsa fewq rew qdsaf safds f ewqrewfds.'
				},
				{
					_id: 'DC2',
					panelType: 'deckDemo',
					x_coord: 10,
					y_coord: 0,
					x_dim: 10,
					y_dim: 14,
					above: {
						adjacent: null,
						overlap: null
					},
					below: {
						adjacent: null,
						overlap: null
					},
					left: {
						adjacent: 'DC1',
						overlap: null
					},
					right: {
						adjacent: 'DC3',
						overlap: null
					},
					content: 'rewqrewqt tre wexczv fdsa rewqre.'
				},
				{
					_id: 'DC3',
					panelType: 'deckDemo',
					x_coord: 20,
					y_coord: 0,
					x_dim: 10,
					y_dim: 14,
					above: {
						adjacent: null,
						overlap: null
					},
					below: {
						adjacent: null,
						overlap: null
					},
					left: {
						adjacent: 'DC2',
						overlap: null
					},
					right: {
						adjacent: 'DC4',
						overlap: null
					},
					content: ' rewq rewqry, and has no relation wh  atsorewq ctual position. Click arewqr rewq ver rewrewq up.'
				},
				{
					_id: 'DC4',
					panelType: 'deckDemo',
					x_coord: 30,
					y_coord: 0,
					x_dim: 10,
					y_dim: 14,
					above: {
						adjacent: null,
						overlap: null
					},
					below: {
						adjacent: null,
						overlap: null
					},
					left: {
						adjacent: 'DC3',
						overlap: null
					},
					right: {
						adjacent: null,
						overlap: null
					},
					content: 'Catre rewtrew  vertically. Click on an trwerew q rewq card to uncover it.'
				}
			]
		};
		return service;
	}]);