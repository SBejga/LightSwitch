app.controller('MainController', ['$route', '$routeParams', '$location',
    function($scope, $route, $routeParams, $location) {

        console.log($route);
        console.log($location);
        console.log($routeParams);

        this.listView = 'test';
        this.sidePanelClass = '';
        this.mainPanelClass = 'hidden-xs';
        this.navigationClass = 'hidden-xs hidden-sm hidden-md';

        this.test = function(id){
            alert(id);
        }

        /**
         * Switch CSS Classes to display side panel
         */
        this.switchToSidePanel = function(){
            this.sidePanelClass = '';
            this.mainPanelClass = 'hidden-xs';
        }
        /**
         * Switch CSS Classes to display main panel
         */
        this.switchToMainPanel = function(){
            this.sidePanelClass = 'hidden-xs';
            this.mainPanelClass = '';
        }
        /**
         * Switch CSS Classes to display navigation panel
         */
        this.setNavVisibility = function(visible){
            if(this.navigationClass === '' || !visible ){
                this.navigationClass = 'hidden-xs hidden-sm hidden-md';
            }else{
                this.navigationClass = '';
            }
        }
    }
]);