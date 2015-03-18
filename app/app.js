var app = angular.module('lightSwitch', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider',
    function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/lamps/lamp.view.html',
                listView: 'app/lamps/lampList.view.html',
                controller: 'LampController',
                controllerAs: 'lamp'
            })
            .when('/lamps/', {
                templateUrl: 'app/lamps/lamp.view.html',
                controller: 'LampController',
                controllerAs: 'lamp'
            })
            .when('/groups/', {
                templateUrl: 'app/groups/group.view.html',
                controller: 'GroupController',
                controllerAs: 'group'
            })
            .when('/scenes/', {
                templateUrl: 'app/scenes/scene.view.html',
                controller: 'SceneController',
                controllerAs: 'scene'
            })
            .when('/settings/', {
                templateUrl: 'app/settings/setting.view.html',
                controller: 'SettingController',
                controllerAs: 'setting'
            })
            .otherwise({ redirectTo: '/lamps/' });

            //$locationProvider.html5Mode(true);
    }]);