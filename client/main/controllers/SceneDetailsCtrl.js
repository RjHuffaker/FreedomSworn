angular.module("freedomsworn")
	.controller("SceneDetailsCtrl", ['$rootScope', '$scope', '$stateParams', '$meteor',
		function($rootScope, $scope, $stateParams, $meteor){
			
			if($stateParams.sceneId === 'new'){
				$scope.scene = {};
			} else {
				$scope.scene = $meteor.object(Scenes, $stateParams.sceneId, false);
			}
			
		}]);