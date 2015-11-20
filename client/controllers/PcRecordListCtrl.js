angular.module("freedomsworn")
	.controller("PcRecordListCtrl", ['$rootScope', '$scope', '$location', '$meteor',
		function($rootScope, $scope, $location, $meteor){
			
			$scope.pcRecordList = $meteor.collection(PcRecords, true).subscribe('pcRecords');
			
			$scope.browsePcRecords = function(){
				$scope.pcRecordList = $meteor.collection(PcRecords);
			};
			
			$scope.readPcRecord = function(pcRecord){
				if(pcRecord){
					$location.path('/pcRecords/'+pcRecord._id);
				} else {
					$location.path('/pcRecords/new');
				}
			};
			
			$scope.editPcRecord = function(pcRecord){
				if(pcRecord._id){
					pcRecord.save();
				} else {
					pcRecord.owner = $rootScope.currentUser._id;
					$scope.pcRecordList.push(pcRecord);
				}
			};
			
			$scope.addPcRecord = function(newPcRecord){
				newPcRecord.owner = $rootScope.currentUser._id;
				$scope.pcRecordList.push(newPcRecord);
			};
			
			$scope.deletePcRecord = function(pcRecord){
				$scope.pcRecordList.splice($scope.pcRecordList.indexOf(pcRecord), 1);
			};
			
		}]);