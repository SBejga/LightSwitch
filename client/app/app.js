var app = angular.module('lightSwitch', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/lamps/', {
                templateUrl: 'app/lamps/lamp.view.html',
                controller: 'LampController',
                controllerAs: 'lampCtrl'
            })
            .when('/lamps/:lampId', {
                templateUrl: 'app/lamps/lamp.view.html',
                controller: 'LampController',
                controllerAs: 'lampCtrl'
            })
            .when('/groups/', {
                templateUrl: 'app/groups/group.view.html',
                controller: 'GroupController',
                controllerAs: 'groupCtrl'
            })
            .when('/scenes/', {
                templateUrl: 'app/scenes/scene.view.html',
                controller: 'SceneController',
                controllerAs: 'sceneCtrl'
            })
            .when('/settings/', {
                templateUrl: 'app/settings/setting.view.html',
                controller: 'SettingController',
                controllerAs: 'settingCtrl'
            })
            .otherwise({ redirectTo: '/lamps/' });

            // Makes Pretty URLs, but forces rerendering of the PAge
            //$locationProvider.html5Mode(true);
    }]);