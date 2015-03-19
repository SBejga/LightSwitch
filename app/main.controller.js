app.controller('MainController', ['$route', '$routeParams', '$location',
    function($scope, $route, $routeParams, $location, $state) {

        this.$route = $route;
        this.$location = $location;
        this.$routeParams = $routeParams;

        this.listView = 'test';

        this.test = function(id){
            alert(id);
        }
    }
]);