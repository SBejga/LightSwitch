var app = angular.module('lightSwitch', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/',{
                templateUrl: 'app/login.view.html'
            })
            .when('/lights/', {
                templateUrl: 'app/lights/light.view.html',
                controller: 'LightController',
                controllerAs: 'lightCtrl'
            })
            .when('/lights/:lightId', {
                templateUrl: 'app/lights/light.view.html',
                controller: 'LightController',
                controllerAs: 'lightCtrl'
            })
            .when('/groups/', {
                templateUrl: 'app/groups/group.view.html',
                controller: 'GroupController',
                controllerAs: 'groupCtrl'
            })
            .when('/groups/:groupId', {
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
            .when('/settings/account', {
                templateUrl: 'app/settings/account.view.html',
                controller: 'SettingsController',
                controllerAs: 'settingsCtrl'
            })
            .when('/settings/speech', {
                templateUrl: 'app/settings/speech.view.html',
                controller: 'SettingsController',
                controllerAs: 'settingsCtrl'
            })
            .when('/settings/rfid', {
                templateUrl: 'app/settings/rfid.view.html',
                controller: 'SettingsController',
                controllerAs: 'settingsCtrl'
            })
            .when('/settings/devices', {
                templateUrl: 'app/settings/devices.view.html',
                controller: 'SettingsController',
                controllerAs: 'settingsCtrl'
            })
            .when('/settings/', { redirectTo: '/settings/account' })
            .otherwise({ redirectTo: '/lights/' });

            // Makes Pretty URLs, but forces rerendering of the Page
            //$locationProvider.html5Mode(true);
    }]);