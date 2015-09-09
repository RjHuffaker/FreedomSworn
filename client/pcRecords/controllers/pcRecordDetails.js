  angular.module("freedomsworn").controller("PcRecordDetailsCtrl", ['$scope', '$stateParams', '$meteor',
    function($scope, $stateParams, $meteor){

      $scope.pcRecord = $meteor.object(PcRecords, $stateParams.pcRecordId);

    }]);