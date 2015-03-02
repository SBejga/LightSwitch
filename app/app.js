var app = angular.module('lightSwitch', ['ngRoute'])
.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/Lamps/', {
                templateUrl: 'app/lamps/lamp.view.html',
                controller: 'LampController',
                controllerAs: 'lamp',
                resolve: {
                    // I will cause a 1 second delay
                    delay: function($q, $timeout) {
                        var delay = $q.defer();
                        $timeout(delay.resolve, 1000);
                        return delay.promise;
                    }
                }
            })
            .when('/Lamps/:lampId/ch/:chapterId', {
                templateUrl: 'chapter.html',
                controller: 'ChapterController'
            });
    }]);