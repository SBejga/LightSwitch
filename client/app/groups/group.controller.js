/**
 * Created by Sandro
 */
app.controller('GroupController', function($scope, $routeParams){
    $scope.mainCtrl.listView = 'app/groups/groupList.view.html';
    this.routeParams = $routeParams;
    this.lights = {};
    this.groups = {};
    this.group = {};

    this.init = function(){
        this.lights = $scope.mainCtrl.getLights();
        this.groups = $scope.mainCtrl.getGroups();
        this.group = this.groups[this.routeParams.groupId]
    };

    this.groupsAvailable = function(){
        return (Object.keys(this.groups).length !== 0);
    };

    this.isInGroup = function(light){
        console.log(light);
        for(i in this.group.lights){
            console.log(this.group.lights[i]);
            if(this.lights[this.group.lights[i]].name === light.name){
                return true;
            }
        }
        return false;
    };

    this.init();
});