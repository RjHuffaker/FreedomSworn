  angular.module('freedomsworn').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',

    function($urlRouterProvider, $stateProvider, $locationProvider){

      $locationProvider.html5Mode(true);

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'client/views/home.ng.html',
          controller: 'HomeCtrl'
        })
        .state('scenes', {
          url: '/scenes',
          templateUrl: 'client/views/sceneList.ng.html',
          controller: 'SceneListCtrl'
        })
        .state('scenes.details', {
          url: '/:sceneId',
          views: {
            'sceneDetails': {
              templateUrl: 'client/views/sceneDetails.ng.html',
              controller: 'SceneDetailsCtrl'
            }
          }
        })
        .state('pcRecords', {
          url: '/pcRecords',
          templateUrl: 'client/views/pcRecordList.ng.html',
          controller: 'PcRecordListCtrl'
        })
        .state('pcRecords.details', {
          url: '/:pcRecordId',
          views: {
            'pcRecordDetails': {
              templateUrl: 'client/views/pcRecordDetails.ng.html',
              controller: 'PcRecordDetailsCtrl'
            }
          }
        });

      $urlRouterProvider.otherwise('/');
      
    }]);