/**
 * Created by Sandro
 */
app.controller('GroupController', function($scope, $routeParams){
    $scope.mainCtrl.listView = 'app/groups/groupList.view.html';
    this.routeParams = $routeParams;
    this.groups = {};
    this.group = {};

    this.init = function(){

        this.groups = $scope.mainCtrl.getGroups();

        for(var i in this.groups){
            if(this.groups[i].name === this.routeParams.groupName){
                this.group = this.groups[i];
            }
        }
    };

    this.init();
});