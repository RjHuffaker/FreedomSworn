angular.module("freedomsworn")
	.controller("HomeCtrl", ['$scope', '$meteor',
		function($scope, $meteor){
			
			$scope.pcRecordsList = [];
			
			$scope.scenesList = [];
			
			$scope.currentMode = 'Home';
			
			$scope.clearSketchPad = function(){
				console.log('placeholder');
			};
			
			// PcRecords BREAD
			
			$scope.browsePcs = function(){
				$scope.pcRecordsList = $meteor.collection(PcRecords);
				$scope.currentMode = 'pcList';
			};
			
			$scope.readPc = function(pcRecord){
				$scope.pcRecord = $meteor.object(PcRecords, {_id: pcRecord._id});
				$scope.currentMode = 'pcDetails';
			};
			
			$scope.editPc = function(pcRecord){
				pcRecord.save();
			};
			
			$scope.addPc = function(){
				$scope.pcRecordsList.push(newPcRecord);
			};
			
			$scope.deletePc = function(pcRecord){
				$scope.pcRecordsList.splice($scope.pcRecordsList.indexOf(pcRecord), 1);
			};
			
			// Scenes BREAD
			
			$scope.browseScenes = function(){
				$scope.scenesList = $meteor.collection(Scenes);
				$scope.currentMode = 'sceneList';
			};
			
			$scope.readScene = function(scene){
				$scope.scene = $meteor.object(Scenes, {_id: scene._id});
				$scope.currentMode = 'sceneDetails';
			};
			
			$scope.editScene = function(scene){
				scene.save();
			};
			
			$scope.addScene = function(){
				$scope.newScene.sketchEvents = [];
				$scope.scenesList.push($scope.newScene);
			};
			
			$scope.deleteScene = function(scene){
				$scope.scenesList.splice($scope.scenesList.indexOf(scene), 1);
			};
			
			$scope.clearSketchPad = function(scene){
				scene.sketchEvents.length = 0;
			};
			
			
		}]);