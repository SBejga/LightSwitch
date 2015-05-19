var app = angular.module('lightSwitch', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/lights/', {
                templateUrl: 'app/lights/light.view.html',
                controller: 'LightController',
                controllerAs: 'lightCtrl'
            })
            .when('/lights/:lightName', {
                templateUrl: 'app/lights/light.view.html',
                controller: 'LightController',
                controllerAs: 'lightCtrl'
            })
            .when('/groups/', {
                templateUrl: 'app/groups/group.view.html',
                controller: 'GroupController',
                controllerAs: 'groupCtrl'
            })
            .when('/groups/:groupName', {
                templateUrl: 'app/groups/group.view.html',
                controller: 'GroupController',
                controllerAs: 'groupCtrl'
            })
            .when('/scenes/', {
                templateUrl: 'app/scenes/scene.view.html',
                controller: 'SceneController',
                controllerAs: 'sceneCtrl'
            })
            .when('/scenes/:sceneId', {
                templateUrl: 'app/scenes/scene.view.html',
                controller: 'SceneController',
                controllerAs: 'sceneCtrl'
            })
            .when('/settings/', {
                templateUrl: 'app/settings/setting.view.html',
                controller: 'SettingController',
                controllerAs: 'settingCtrl'
            })
            .otherwise({ redirectTo: '/lights/' });

            // Makes Pretty URLs, but forces rerendering of the PAge
            //$locationProvider.html5Mode(true);
    }]);