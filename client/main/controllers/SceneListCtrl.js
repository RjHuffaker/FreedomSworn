angular.module("freedomsworn")
	.controller("SceneListCtrl", ['$rootScope', '$scope', '$location', '$meteor',
		function($rootScope, $scope, $location, $meteor){
			
			$scope.sceneList = $meteor.collection(Scenes, true).subscribe('scenes');
			
			$scope.browseScenes = function(){
				$scope.sceneList = $meteor.collection(Scenes);
			};
			
			$scope.readScene = function(scene){
				if(scene){
					$location.path('/scenes/'+scene._id);
				} else {
					$location.path('/scenes/new');
				}
			};
			
			$scope.editScene = function(scene){
				if(scene._id){
					scene.save();
				} else {
					scene.owner = $rootScope.currentUser._id;
					$scope.sceneList.push(scene);
				}
			};
			
			$scope.addScene = function(newScene){
				newScene.owner = $rootScope.currentUser._id;
				$scope.sceneList.push(newScene);
			};
			
			$scope.deleteScene = function(scene){
				$scope.sceneList.splice($scope.sceneList.indexOf(scene), 1);
			};
			
			
		}]);