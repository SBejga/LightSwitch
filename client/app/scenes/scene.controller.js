/**
 * Created by Sandro
 */
app.controller('SceneController', function($scope, $routeParams, $http){
    $scope.mainCtrl.listView = 'app/scenes/sceneList.view.html';
    this.routeParams = $routeParams;
    this.scenes = null;
    this.scene = null;

    this.init = function(){
        this.scenes = $scope.mainCtrl.getScenes();

        for(var i in this.scenes){
            if(this.scenes[i].name === this.routeParams.sceneName){
                this.scene = this.scenes[i];
            }
        }
    };

    this.init();
});