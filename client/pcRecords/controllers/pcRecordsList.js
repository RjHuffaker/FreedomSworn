  angular.module("freedomsworn").controller("PcRecordsListCtrl", ['$scope', '$meteor',

    function($scope, $meteor){

      $scope.pcRecordsList = $meteor.collection(PcRecords);
      
      $scope.remove = function(pcRecord){

      	$scope.pcRecordsList.splice($scope.pcRecordsList.indexOf(pcRecord), 1);
	    };

    	$scope.removeAll = function(){
	      $scope.pcRecordsList.remove();
      };
      
    }]);