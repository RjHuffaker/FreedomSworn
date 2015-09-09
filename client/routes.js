  angular.module('freedomsworn').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',

    function($urlRouterProvider, $stateProvider, $locationProvider){

      $locationProvider.html5Mode(true);

      $stateProvider
        .state('pcRecords', {
          url: '/pcRecords',
          templateUrl: 'client/pcRecords/views/pcRecords-list.ng.html',
          controller: 'PcRecordsListCtrl'
        })
        .state('pcRecordDetails', {
          url: '/pcRecords/:pcRecordId',
          templateUrl: 'client/pcRecords/views/pcRecord-details.ng.html',
          controller: 'PcRecordDetailsCtrl'
        });

      $urlRouterProvider.otherwise("/pcRecords");
      
    }]);