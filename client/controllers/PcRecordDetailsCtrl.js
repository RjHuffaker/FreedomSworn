angular.module("freedomsworn")
	.controller("PcRecordDetailsCtrl", ['$scope', '$stateParams', '$meteor',
		function($scope, $stateParams, $meteor){
			
			if($stateParams.pcRecordId === 'new'){
				$scope.pcRecord = {};
			} else {
				$scope.pcRecord = $meteor.object(PcRecords, $stateParams.pcRecordId, false);
			}
			
		}]);