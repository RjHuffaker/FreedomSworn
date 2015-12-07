angular.module('freedomsworn').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function($urlRouterProvider, $stateProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: viewPaths.main+'home.ng.html',
        controller: 'HomeCtrl'
      })
      
      .state('pcDeckList', {
        url: '/pcDecks',
        templateUrl: viewPaths.pcDeck+'pc-deck.ng.html',
        controller: 'PcDeckListCtrl'
      })
      .state('pcDeckDetails', {
        url: '/pcDecks/:pcDeckId',
        templateUrl: viewPaths.pcDeck+'pc-deck.ng.html',
        controller: 'PcDeckDetailsCtrl'
      })
      
      .state('featureDeckList', {
        url: '/featureDecks',
        templateUrl: viewPaths.featureDeck+'feature-deck.ng.html',
        controller: 'FeatureDeckListCtrl'
      })
      .state('featureDeckDetails', {
        url: '/featureDecks/:featureDeckId',
        templateUrl: viewPaths.featureDeck+'feature-deck.ng.html',
        controller: 'FeatureDeckDetailsCtrl'
      })
      
      .state('npcDeck', {
        url: '/npcDeck',
        templateUrl: viewPaths.npcDeck+'npc-deck.ng.html',
        controller: 'NpcDeckCtrl'
      })
      
      
      .state('scenes', {
        url: '/scenes',
        templateUrl: viewPaths.main+'sceneList.ng.html',
        controller: 'SceneListCtrl'
      })
      .state('scenes.details', {
        url: '/:sceneId',
        views: {
          'sceneDetails': {
            templateUrl: viewPaths.main+'sceneDetails.ng.html',
            controller: 'SceneDetailsCtrl'
          }
        }
      })
      .state('pcRecords', {
        url: '/pcRecords',
        templateUrl: viewPaths.main+'pcRecordList.ng.html',
        controller: 'PcRecordListCtrl'
      })
      .state('pcRecords.details', {
        url: '/:pcRecordId',
        views: {
          'pcRecordDetails': {
            templateUrl: viewPaths.main+'pcRecordDetails.ng.html',
            controller: 'PcRecordDetailsCtrl'
          }
        }
      });

    $urlRouterProvider.otherwise('/');
    
  }]);