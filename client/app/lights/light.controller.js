/**
 * Lamp Controller
 */
app.controller('LightController', function($scope, $routeParams, $http) {
    $scope.mainCtrl.listView = 'app/lights/lightList.view.html';
    this.routeParams = $routeParams;
    this.groups = {};
    this.lights = {};

    this.getLights = function () {
        $http({
            url: '/rest/',
            method: "GET",
            params: {password: 'password'}
        }).success(this.setLights).error();
    };

    this.setLights = function (data, status, headers, config){
        console.log(data);
        if(data.state){
            //save lights to light controller
            $scope.lightCtrl.lights = data.state.lights;
            //prepare groups
            var $groups = data.state.groups;
            for($key in groups){
                //console.log($key + "    " + groups[$key]);
                //$scope.lightCtrl.groups
            }
        }
    };



    /*this.groups = [
        {
            id: '1',
            name: 'Wohnzimmer',
            lights:[
                {id: '1', name: 'Lampe 1', state: 'on', color: '#ff0000'},
                {id: '2', name: 'Lampe 2', state: 'on', color: '#ff0000'},
                {id: '3', name: 'Lampe 3', state: 'on', color: '#ff0000'},
                {id: '4', name: 'Lampe 4', state: 'on', color: '#ff0000'},
                {id: '5', name: 'Lampe 5', state: 'on', color: '#ff0000'}]
        },
        {
            id: '2',
            name: 'Esszimmer',
            lights:[
                {id: '6', name: 'Lampe 6', state: 'on', color: '#ff0000'},
                {id: '7', name: 'Lampe 7', state: 'on', color: '#ff0000'}]
        },
        {
            id: '3',
            name: 'Schlafzimmer',
            lights:[
                {id: '8', name: 'Lampe 8', state: 'on', color: '#ff0000'},
                {id: '9', name: 'Lampe 9', state: 'on', color: '#ff0000'},
                {id: '10', name: 'Lampe 10', state: 'on', color: '#ff0000'},
                {id: '11', name: 'Lampe 11', state: 'on', color: '#ff0000'}]
        }
    ];*/

    /*this.lights = {
        1: {id: '1', name: 'Lampe 1', state: 'on', color: '#ff0000'},
        2: {id: '2', name: 'Lampe 2', state: 'on', color: '#ff0000'},
        3: {id: '3', name: 'Lampe 3', state: 'on', color: '#ff0000'},
        4: {id: '4', name: 'Lampe 4', state: 'on', color: '#ff0000'},
        5: {id: '5', name: 'Lampe 5', state: 'on', color: '#ff0000'},
        6: {id: '6', name: 'Lampe 6', state: 'on', color: '#ff0000'},
        7: {id: '7', name: 'Lampe 7', state: 'on', color: '#ff0000'},
        8: {id: '8', name: 'Lampe 8', state: 'on', color: '#ff0000'},
        9: {id: '9', name: 'Lampe 9', state: 'on', color: '#ff0000'},
        10: {id: '10', name: 'Lampe 10', state: 'on', color: '#ff0000'},
        11: {id: '11', name: 'Lampe 11', state: 'on', color: '#ff0000'}
    };*/

    /*for($i in this.lights){
        if(this.lights[$i].id === this.routeParams.lampId){
            this.lamp = this.lights[$i];
        }
    }*/

    this.getLights();
});